#include <emscripten/emscripten.h>

int EMSCRIPTEN_KEEPALIVE fibonacci(int n)
{
    if(n == 0 || n == 1)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
int main(){}
