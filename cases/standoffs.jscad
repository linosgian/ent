function standoffs_extrude_8_outline_fn(){
    return CAG.circle({"center":[123,14.1666667],"radius":2.5})
.union(
    CAG.circle({"center":[102,40.1666667],"radius":2.5})
).union(
    CAG.circle({"center":[113,52.1666667],"radius":2.5})
).union(
    CAG.circle({"center":[30.6,55.6666667],"radius":2.5})
).union(
    CAG.circle({"center":[10,43],"radius":2.5})
).union(
    CAG.circle({"center":[-7,10],"radius":2.5})
).union(
    CAG.circle({"center":[12,-5],"radius":2.5})
).union(
    CAG.circle({"center":[60.0890897,-17.6246659],"radius":2.5})
).union(
    CAG.circle({"center":[123.3449578,-29.4448292],"radius":2.5})
).extrude({ offset: [0, 0, 8] });
}




                function standoffs_case_fn() {
                    

                // creating part 0 of case standoffs
                let standoffs__part_0 = standoffs_extrude_8_outline_fn();

                // make sure that rotations are relative
                let standoffs__part_0_bounds = standoffs__part_0.getBounds();
                let standoffs__part_0_x = standoffs__part_0_bounds[0].x + (standoffs__part_0_bounds[1].x - standoffs__part_0_bounds[0].x) / 2
                let standoffs__part_0_y = standoffs__part_0_bounds[0].y + (standoffs__part_0_bounds[1].y - standoffs__part_0_bounds[0].y) / 2
                standoffs__part_0 = translate([-standoffs__part_0_x, -standoffs__part_0_y, 0], standoffs__part_0);
                standoffs__part_0 = rotate([0,0,0], standoffs__part_0);
                standoffs__part_0 = translate([standoffs__part_0_x, standoffs__part_0_y, 0], standoffs__part_0);

                standoffs__part_0 = translate([0,0,0], standoffs__part_0);
                let result = standoffs__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return standoffs_case_fn();
            }

        