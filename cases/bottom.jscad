function panel_extrude_1_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-4.3142099,-8.5]]).appendArc([-3.6251164,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9140885,-27.6766558]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([75.5798196,-31.3971141]).appendArc([76.2252821,-31.4935791],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([95.7618323,-37.0955947]).appendArc([96.2847628,-37.3121996],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([113.2114556,-46.6948186]).appendArc([116.6100289,-45.7202932],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([128.4878646,-24.2921104]).appendArc([127.5133393,-20.8935371],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-17.997071]).appendArc([121,-15.8105217],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,20.1666667]).appendArc([118.5,22.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([116,22.6666667]).appendPoint([116,53.1666667]).appendArc([113.5,55.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
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

        