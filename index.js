function chooseBestSum(t, k, ls) {
    if (ls.length < 3)
      return null;
    let res = 0;
    function Fleurimond(t, k, ls, start, path)
    {
      if (path.length == k)
      {
        let sum = path.reduce(function(a, b) {
          return a + b;
        }, 0);
        if (sum <= t)
          res = Math.max(res, sum);
        return;
      }
      for (let i = start; i < ls.length; i++)
      {
        path.push(ls[i]);
        Fleurimond(t, k, ls, i+1, path);
        path.pop();
      }
    }
    Fleurimond(t, k, ls, 0, []);
    return res === 0 ? null : res;
}
