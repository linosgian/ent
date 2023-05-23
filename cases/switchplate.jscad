function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-6.1921778,-8.5]]).appendArc([-5.5030843,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9047358,-28.2124726]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([73.5801242,-31.3622093]).appendArc([74.2255867,-31.4586743],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([91.8396137,-36.5094153]).appendArc([92.3625442,-36.7260202],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([109.2892369,-46.1086391]).appendArc([112.6878102,-45.1341137],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([124.5656459,-23.7059309]).appendArc([123.5911206,-20.3073576],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-19.5850128]).appendArc([121,-17.3984635],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,3.8946667]).appendPoint([89,3.8946667]).appendPoint([89,55.6666667]).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[45,0],"radius":1.5})
.union(
    CAG.circle({"center":[10.1,29],"radius":1.5})
).union(
    CAG.circle({"center":[69,41],"radius":1.5})
).union(
    CAG.circle({"center":[105,-3],"radius":1.5})
).union(
    CAG.circle({"center":[117,-7],"radius":1.5})
).union(
    new CSG.Path2D([[64.8788993,-29.7101003],[78.876767,-29.954434]]).appendPoint([79.1211007,-15.9565663]).appendPoint([65.123233,-15.7122326]).appendPoint([64.8788993,-29.7101003]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,40.1666667],[87,40.1666667]]).appendPoint([87,54.1666667]).appendPoint([73,54.1666667]).appendPoint([73,40.1666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,21.1666667],[87,21.1666667]]).appendPoint([87,35.1666667]).appendPoint([73,35.1666667]).appendPoint([73,21.1666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[73,2.1666667],[87,2.1666667]]).appendPoint([87,16.1666667]).appendPoint([73,16.1666667]).appendPoint([73,2.1666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[53,43],[67,43]]).appendPoint([67,57]).appendPoint([53,57]).appendPoint([53,43]).close().innerToCAG()
).union(
    new CSG.Path2D([[53,24],[67,24]]).appendPoint([67,38]).appendPoint([53,38]).appendPoint([53,24]).close().innerToCAG()
).union(
    new CSG.Path2D([[53,5],[67,5]]).appendPoint([67,19]).appendPoint([53,19]).appendPoint([53,5]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.6,48.6666667],[47.6,48.6666667]]).appendPoint([47.6,62.6666667]).appendPoint([33.6,62.6666667]).appendPoint([33.6,48.6666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.4,29.6666667],[47.4,29.6666667]]).appendPoint([47.4,43.6666667]).appendPoint([33.4,43.6666667]).appendPoint([33.4,29.6666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.2,10.6666667],[47.2,10.6666667]]).appendPoint([47.2,24.6666667]).appendPoint([33.2,24.6666667]).appendPoint([33.2,10.6666667]).close().innerToCAG()
).union(
    new CSG.Path2D([[13,43],[27,43]]).appendPoint([27,57]).appendPoint([13,57]).appendPoint([13,43]).close().innerToCAG()
).union(
    new CSG.Path2D([[13,24],[27,24]]).appendPoint([27,38]).appendPoint([13,38]).appendPoint([13,24]).close().innerToCAG()
).union(
    new CSG.Path2D([[13,5],[27,5]]).appendPoint([27,19]).appendPoint([13,19]).appendPoint([13,5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,31],[7,31]]).appendPoint([7,45]).appendPoint([-7,45]).appendPoint([-7,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12],[7,12]]).appendPoint([7,26]).appendPoint([-7,26]).appendPoint([-7,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.0616799,-36.4550404],[110.3063558,-43.2423751]]).appendPoint([117.0936905,-30.9976992]).appendPoint([104.8490146,-24.2103645]).appendPoint([98.0616799,-36.4550404]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.9554287,-31.0744223],[95.4130925,-34.9333453]]).appendPoint([99.2720155,-21.4756815]).appendPoint([85.8143517,-17.6167585]).appendPoint([81.9554287,-31.0744223]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        