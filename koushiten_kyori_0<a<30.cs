using System;
using static System.Console;
using System.Collections.Generic;
public class programs{
    public static void Main(){
        var lx = new List<int>();
        var ly = new List<int>();
        for (var g=0;g<30;g++) lx.Add(g + 1);
        for (var h=0;h<30;h++) ly.Add(h + 1);
        var a1 = new List<double>();
        foreach (var i in lx){
            foreach (var j in ly){
                a1.Add(Math.Pow(i, 2) + Math.Pow(j, 2));
            }
        }
        a1.Sort();
        foreach (var k in a1) Write(k + " ");
        WriteLine();
    }
}
