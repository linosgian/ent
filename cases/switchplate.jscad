function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-10,-6],[-10,44]]).appendArc([-7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([7.5,46.5]).appendArc([10,49],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,56]).appendArc([12.5,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([28.1,58.5]).appendArc([30.6,61],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61.6666667]).appendArc([33.1,64.1666667],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([48.1,64.1666667]).appendArc([50.6,61.6666667],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61]).appendArc([53.1,58.5],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([68,58.5]).appendArc([69,57.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([69,55.6666667]).appendPoint([89,55.6666667]).appendPoint([89,3.8946667]).appendPoint([126,3.8946667]).appendPoint([126,-3.2727841]).appendPoint([126.3495499,-3.2788855]).appendPoint([125.9917755,-23.7757632]).appendPoint([125.8434301,-32.2744687]).appendPoint([125.7658549,-32.2731146]).appendPoint([125.8633362,-32.3271494]).appendPoint([118.0094204,-46.4959887]).appendArc([114.6108471,-47.4705139],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([96.2847629,-37.3121996]).appendArc([95.7618323,-37.0955947],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([76.225282,-31.4935791]).appendArc([75.5798195,-31.3971141],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([63.852873,-31.1924195]).appendArc([63.3251538,-31.0308963],{"radius":1,"clockwise":true,"large":false}).appendArc([63.3616753,-30.6837694],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.9026999,0.3115091]).appendArc([61.9379093,2.3461093],{"radius":2,"clockwise":false,"large":false}).appendPoint([50.2,2.5509953]).appendPoint([50.2,6.6666667]).appendArc([49.2,7.6666667],{"radius":1,"clockwise":false,"large":false}).appendPoint([31.2,7.6666667]).appendArc([30.2,6.6666667],{"radius":1,"clockwise":false,"large":false}).appendPoint([30.2,2.9000966]).appendPoint([10.9456769,3.236182]).appendArc([8.9110767,1.2713914],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.749244,-8]).appendPoint([-9,-8]).appendArc([-10,-6],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[10.1,29],"radius":1.5})
.union(
    CAG.circle({"center":[69,41],"radius":1.5})
).union(
    CAG.circle({"center":[105,-3],"radius":1.5})
).union(
    CAG.circle({"center":[122,-7],"radius":1.5})
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
    new CSG.Path2D([[101.9838986,-37.0412199],[114.2285745,-43.8285546]]).appendPoint([121.0159092,-31.5838787]).appendPoint([108.7712333,-24.796544]).appendPoint([101.9838986,-37.0412199]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.9551241,-31.1093271],[97.4127879,-34.9682501]]).appendPoint([101.2717109,-21.5105863]).appendPoint([87.8140471,-17.6516633]).appendPoint([83.9551241,-31.1093271]).close().innerToCAG()
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

        