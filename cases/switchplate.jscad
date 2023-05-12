function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-10,-8.5],[6.976126,-8.5]]).appendPoint([72.9187649,-27.4087474]).appendPoint([72.8704777,-30.1751194]).appendArc([73.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([86.9087485,-31.4203107]).appendPoint([108.9580086,-37.7428342]).appendPoint([128.3203759,-48.4755697]).appendPoint([139.2285923,-28.7966263]).appendPoint([121,-18.6923526]).appendPoint([121,22.6666667]).appendPoint([116,22.6666667]).appendPoint([116,55.6666667]).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([50.6,58.5]).appendPoint([50.6,64.1666667]).appendPoint([30.6,64.1666667]).appendPoint([30.6,58.5]).appendPoint([10,58.5]).appendPoint([10,46.5]).appendPoint([-10,46.5]).appendPoint([-10,-8.5]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[74.8788993,-29.7101003],[88.876767,-29.954434]]).appendPoint([89.1211007,-15.9565663]).appendPoint([75.123233,-15.7122326]).appendPoint([74.8788993,-29.7101003]).close().innerToCAG()
.union(
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
    new CSG.Path2D([[114.9062697,-37.609947],[127.1509456,-44.3972817]]).appendPoint([133.9382803,-32.1526058]).appendPoint([121.6936044,-25.3652711]).appendPoint([114.9062697,-37.609947]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.9549718,-31.1267795],[108.4126356,-34.9857025]]).appendPoint([112.2715586,-21.5280387]).appendPoint([98.8138948,-17.6691157]).appendPoint([94.9549718,-31.1267795]).close().innerToCAG()
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

        