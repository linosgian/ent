function panel_extrude_1_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-6.1921778,-8.5]]).appendArc([-5.5030843,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9047358,-28.2124726]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([73.5801242,-31.3622093]).appendArc([74.2255867,-31.4586743],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([91.8396137,-36.5094153]).appendArc([92.3625442,-36.7260202],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([109.2892369,-46.1086391]).appendArc([112.6878102,-45.1341137],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([124.5656459,-23.7059309]).appendArc([123.5911206,-20.3073576],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-19.5850128]).appendArc([121,-17.3984635],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,20.1666667]).appendArc([118.5,22.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([116,22.6666667]).appendPoint([116,53.1666667]).appendArc([113.5,55.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = panel_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        