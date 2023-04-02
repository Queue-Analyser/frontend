CXX=g++
CXXFLAGS=-std=c++11 -Wall -pedantic -Wextra -Werror -O2 -lboost_system

all: server run

server: server.cpp
	$(CXX) $(CXXFLAGS) server.cpp -o server

.PHONY: clean
clean:
	rm -f server

.PHONY: run
run:
	./server 5000
