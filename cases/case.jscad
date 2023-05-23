function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[45,0],"radius":2.5})
.union(
    CAG.circle({"center":[10.1,29],"radius":2.5})
).union(
    CAG.circle({"center":[69,41],"radius":2.5})
).union(
    CAG.circle({"center":[105,-3],"radius":2.5})
).union(
    CAG.circle({"center":[117,-7],"radius":2.5})
).union(
    CAG.circle({"center":[117,19],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[45,0],"radius":1.5})
.union(
    CAG.circle({"center":[10.1,29],"radius":1.5})
).union(
    CAG.circle({"center":[69,41],"radius":1.5})
).union(
    CAG.circle({"center":[105,-3],"radius":1.5})
).union(
    CAG.circle({"center":[117,-7],"radius":1.5})
).union(
    CAG.circle({"center":[117,19],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function panel_extrude_1_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-6.1921778,-8.5]]).appendArc([-5.5030843,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9047358,-28.2124726]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([73.5801242,-31.3622093]).appendArc([74.2255867,-31.4586743],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([91.8396137,-36.5094153]).appendArc([92.3625442,-36.7260202],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([109.2892369,-46.1086391]).appendArc([112.6878102,-45.1341137],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([124.5656459,-23.7059309]).appendArc([123.5911206,-20.3073576],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-19.5850128]).appendArc([121,-17.3984635],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,20.1666667]).appendArc([118.5,22.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([116,22.6666667]).appendPoint([116,53.1666667]).appendArc([113.5,55.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = bottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        