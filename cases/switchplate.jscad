function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-4.3142099,-8.5]]).appendArc([-3.6251164,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9140885,-27.6766558]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([75.5798196,-31.3971141]).appendArc([76.2252821,-31.4935791],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([95.7618323,-37.0955947]).appendArc([96.2847628,-37.3121996],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([113.2114556,-46.6948186]).appendArc([116.6100289,-45.7202932],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([128.4878646,-24.2921104]).appendArc([127.5133393,-20.8935371],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-17.997071]).appendArc([121,-15.8105217],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,3.8946667]).appendPoint([89,3.8946667]).appendPoint([89,55.6666667]).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
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

        