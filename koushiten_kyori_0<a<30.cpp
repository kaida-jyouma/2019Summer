#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
int main(){
    std::vector<int> lx;
    std::vector<int> ly;
    for (int g=0;g<30;g++) lx.push_back(g + 1);
    for (int h=0;h<30;h++) ly.push_back(h + 1);
    std::vector<int> a1;
    for (auto i : lx) for (auto j : ly) a1.push_back(std::pow(i, 2) + std::pow(j, 2));
    for (auto k : a1) cout << k << " ";
}
