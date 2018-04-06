var GAME_LEVELS = [
  ["                                                         yy                     ",
   "                      yy                                 yy                     ",
   "    oo                yy                o                                       ",
   "    oo                                                                          ",
   "                                     xxxxxxx                                    ",
   "    xxx                      xxx               xxx       xxx      xxx           ",
   "          xx    xx    xx                                                        ",
   "                                                                             xx ",
   "     yy                           yy                          yy                ",
   "     yy                           yy                          yy                ",
   "                                                  o                     xx    o ",
   "                                                                                ",
   "                                                 xxx     x                      ",
   "                       xx           xxx    xxx   xxx     x                   xx ",
   "          o         x  xx    xxx    xxx    xxx   xxx     x  xx     xx        xx ",
   "                xx  x  xx    xxx    xxx    xxx   xxx     x  xx     xx       xxx ",
   "   @   xxxxx    xx  x  xx    xxx    xxx    xxx   xxx     x  xx     xx     xxxxx ",
   "xxxxxxxxxxxxxx!!!!!!x!!xx!!!!xxx!!!!xxx!!!!xxx!!!xxx!!!!!x!!xx!!!!!xx!!!!xxxxxx ",
   "             xxxxx!!!!!xx!!!!xxx!!!!xxx!!!!!!!!!!xxx!!!!!!!!xx!!!!!!!!xxxxx     ",
   "                xxxx!!!xx!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!xx!!!!!xxxx         ",
   "                  xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx           ",
   "                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx             ",
   "                                                                                ",
   "                                                                                "],
  ["   x         yy                                                                                 yy          x     ",
   "   x         yy                                        oo                                       yy          x     ",
   "   x                                     yy            oo              yy                                   x     ",
   "   x                   yy                yy                            yy                                   x     ",
   "   x                   yy                         xxxxxxxxxxxx                       yy                     x     ",
   "   x                                            xxxxxxxxxxxxxxxxx                    yy                     x     ",
   "   x                                          xxxxxxxxxxxxxxxxxxxxx                                         x     ",
   "   x       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     ",
   "   x                                 =             o                                                        x     ",
   "   xx                                                                                                       x     ",
   "   xxxx                                                                                                     x     ",
   "   xxxxx                 o                                           o                 =                    x     ",
   "   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     x     ",
   "   x    =                                          o                                                        x     ",
   "   x                                                                                                        x     ",
   "   x                                                                                                       xx     ",
   "   x                          o                                          o                       =       xxxx     ",
   "   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     ",
   "   yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy     ",
   "                                                                                                                  ",
   "                  yy                                    yy                             xxx                        ",
   "                  yy                                    yy                              |            yy           ",
   "                                     yy                             xxx                              yy           ",
   "                                     yy            xxx               |                                            ",
   "                                                    |                                                             ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   " o                               o                                                              o                 ",
   "                                                             o                                                    ",
   "     @    xxxx      xxxxxx     xxxxxx      xxxxxx                                                           ggg   ",
   "xxxxxxxxxxxxxx    xxxxxxx     xxxxxx      xxxxxx         xxxxxxxx        xxxxxxxxx           xxxxxxx       xxxxx  ",
   "xxxxxxxxxxxxx!!!!xxxxxxx!!!!!xxxxxx!!!!!!xxxxxx!!!!!!!!!xxxxxxxx!!!!!!!!xxxxxxxxxxx!!!xx!!!xxxxxxxxx!!!!!!!xxxxx! ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! "],
  [" x      yy                                            x       xxxxxxxx                                        ",
   " x o    yy                 yy                yy       x       x      x                                        ",
   " x                         yy                yy       x       x  oo  x                      yy                ",
   " x                                                    x       x  oo  x                      yy                ",
   " x                                                    x       x      x                                yy      ",
   " x      xxxxx    xxxxx    xxxxx    xxxxx   xxx        x       xxxxxxxx          yy                    yy      ",
   " x        x                                        h  x                         yy                            ",
   " x        x                                                                                                   ",
   " xxx      x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   " x        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   " x        x                                                                                                 x ",
   " x      xxx                                                                                                 x ",
   " x        x                                                                                                 x ",
   " x        x                       o                                                                         x ",
   " xxx                                                                                                        x ",
   " x                               xxx     xxx                                             o                  x ",
   " x           o                 = xxx     xxx     xxx    xxx    xxx                                          x ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxx     xxx    xxx    xxx    xxx    xxxxxx    xxxxxx               x ",
   " x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxx      x ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     x ",
   " x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx    x ",
   " x                                                                                                          x ",
   " x  @                      o                                                                               xx ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                                                                     v                                        "],
  ["                                                                                                              ",
   "                    v                                                                                         ",
   "     yyyyyyy  y        yyyyyyy  y     y  yyyyyyy   yy     y   yyyyyyy     y                                   ",
   "     y     y  y        y     y  y     y     y      y y    y   y           y                                   ",
   "     y     y  y        y     y  y     y     y      y  y   y   y           y  xx                               ",
   "     yyyyyyy  y        yyyyyyy  yyyyyyy     y      y   y  y   y  yyyy     y                                   ",
   "     y        y        y     y     y        y      y    y y   y     y     y                                   ",
   " xx  y        y        y     y     y        y      y     yy   y     y                                         ",
   "     y        yyyyyyy  y     y     y     yyyyyyy   y      y   yyyyyyy     y      xx                           ",
   "      v                              xx                                                                       ",
   "                     xx                               v      xx                                               ",
   "        xx             yyyyyy  yyyyyyy  yyyyyyy                               v                               ",
   "                       y       y     y  y     y                      xx                                       ",
   "                       y       y     y  y     y                                                               ",
   "                       yyyyyy  y     y  yyyyyy                                                                ",
   "                   v   y       y     y  y    y           xx                                                   ",
   "                       y       y     y  y    yy                                                               ",
   "                       y       y     y  y     y                                                               ",
   "     xx         xx     y       yyyyyyy  y     y                              xx                               ",
   "                                                      xx                                                      ",
   "                                                                                                              ",
   "   yyyyyyy   y     y   yyyyyyy  yy     y  y    y       y     y  yyyyyyy   y      y                          x ",
   "      y      y     y   y     y  y y    y  y   y        y     y  y     y   y      y                          x ",
   "      y      y     y   y     y  y  y   y  y  y    x    y     y  y     y   y      y                          x ",
   "      y      yyyyyyy   yyyyyyy  y   y  y  yyy          yyyyyyy  y     y   y      y                          x ",
   "      y      y     y   y     y  y    y y  y  y            y     y     y   y      y                          x ",
   "      y      y     y   y     y  y     yy  y   y       x   y     y     y   y      y                          x ",
   "      y      y     y   y     y  y      y  y    y          y     yyyyyyy   yyyyyyyy                          x ",
   "                                                                                                            x ",
   "  x   xx            xx             xx             xx         xx                    xx                       x ",
   "  x                                                                                                         x ",
   "  x  @                                                                                                      x ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   "  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
   "                                                                                                              ",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
