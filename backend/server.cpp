#include <cstdlib>
#include <iostream>
#include <string>
#include <boost/asio.hpp>

using boost::asio::ip::tcp;

int main() {
    boost::asio::io_service io_service;
    int result = 0;
    // Создаем серверный сокет и привязываем его к порту 5000
    tcp::acceptor acceptor(io_service, tcp::endpoint(tcp::v4(), 5000));

    while (true) {
        // Ожидаем входящее подключение
        tcp::socket socket(io_service);
        acceptor.accept(socket);

        // Читаем запрос от клиента
        boost::asio::streambuf buf;
        boost::asio::read_until(socket, buf, "\r\n");

       // Отправляем ответ с заголовками для разрешения CORS
        std::string message = "HTTP/1.1 200 OK\r\n";
        message += "Content-Type: text/plain\r\n";
        message += "Connection: close\r\n";
        message += "Access-Control-Allow-Origin: *\r\n"; // разрешаем запросы от любого домена
        message += "\r\n";

        if (buf.size() > 0) {
            std::string request(boost::asio::buffers_begin(buf.data()), boost::asio::buffers_end(buf.data()));
            if (request.find("/getCurrentValue") != std::string::npos) {
                if (rand() % 2 || result == 0){
                    result += 5;
                } else {
                    result -= 1;
                }
                result %= 25;
                message += std::to_string(result);
            }
        }
        else {
            message += "Error: empty request";
        }
        boost::asio::write(socket, boost::asio::buffer(message));
        socket.shutdown(tcp::socket::shutdown_both);
        socket.close();
    }
    return 0;
}
