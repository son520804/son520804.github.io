library(animation)<br />
ani.options(interval = 0.2)<br />
HPD.ani = function(x = seq(-3, 3, length.out = 300), <br />
    y = dnorm(x), delta = 0.01, p.col = "lightgray", ...) {<br />
    <br />
    if (min(y) < 0) <br />
        warning("Probability density should be non-negative!")<br />
    y0 = max(y)<br />
    interval = ani.options("interval")<br />
    while (y0 > 0) {<br />
        y0 = y0 - delta<br />
        plot.new()<br />
        plot.window(range(x), c(0, max(y)))<br />
        idx = y >= y0<br />
        <br />
        px = ifelse(idx, x, NA)<br />
        <br />
        polygon(c(px, rev(px)), c(y, rep(0, length(y))), border = NA, <br />
            col = p.col)<br />
        <br />
        lines(x, y, ...)<br />
        Sys.sleep(interval)<br />
    }<br />
}<br />
HPD.ani() 
