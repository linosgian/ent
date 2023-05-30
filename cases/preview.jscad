function panel_extrude_3_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[-4.3142099,-8.5]]).appendArc([-3.6251164,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([62.9140885,-27.6766558]).appendPoint([62.8704777,-30.1751194]).appendArc([63.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([75.5798195,-31.3971141]).appendArc([76.225282,-31.4935791],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([95.7618323,-37.0955947]).appendArc([96.2847628,-37.3121996],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([114.6108471,-47.470514]).appendArc([118.0094204,-46.4959886],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([125.8633362,-32.3271494]).appendPoint([125.7658549,-32.2731146]).appendPoint([125.8434301,-32.2744687]).appendPoint([125.9917755,-23.7757632]).appendPoint([126.3495499,-3.2788855]).appendPoint([126,-3.2727841]).appendPoint([126,20.1666667]).appendArc([123.5,22.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([118.5,22.6666667]).appendArc([116,25.1666667],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([116,53.1666667]).appendArc([113.5,55.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _keycap_outlines_extrude_6_outline_fn(){
    return new CSG.Path2D([[65.1070457,-30.964273],[78.6049896,-31.1998805]]).appendArc([80.6395898,-29.2350899],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.8577449,-16.7369938]).appendArc([78.8929543,-14.7023936],{"radius":2,"clockwise":false,"large":false}).appendPoint([65.3950104,-14.4667861]).appendArc([63.3604102,-16.4315767],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.1422551,-28.9296728]).appendArc([65.1070457,-30.964273],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[73.25,38.9166667],[86.75,38.9166667]]).appendArc([88.75,40.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.75,53.4166667]).appendArc([86.75,55.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([73.25,55.4166667]).appendArc([71.25,53.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([71.25,40.9166667]).appendArc([73.25,38.9166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[73.25,19.9166667],[86.75,19.9166667]]).appendArc([88.75,21.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.75,34.4166667]).appendArc([86.75,36.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([73.25,36.4166667]).appendArc([71.25,34.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([71.25,21.9166667]).appendArc([73.25,19.9166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[73.25,0.9166667],[86.75,0.9166667]]).appendArc([88.75,2.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.75,15.4166667]).appendArc([86.75,17.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([73.25,17.4166667]).appendArc([71.25,15.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([71.25,2.9166667]).appendArc([73.25,0.9166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[53.25,41.75],[66.75,41.75]]).appendArc([68.75,43.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.75,56.25]).appendArc([66.75,58.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([53.25,58.25]).appendArc([51.25,56.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.25,43.75]).appendArc([53.25,41.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[53.25,22.75],[66.75,22.75]]).appendArc([68.75,24.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.75,37.25]).appendArc([66.75,39.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([53.25,39.25]).appendArc([51.25,37.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.25,24.75]).appendArc([53.25,22.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[53.25,3.75],[66.75,3.75]]).appendArc([68.75,5.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.75,18.25]).appendArc([66.75,20.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([53.25,20.25]).appendArc([51.25,18.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([51.25,5.75]).appendArc([53.25,3.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.85,47.4166667],[47.35,47.4166667]]).appendArc([49.35,49.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.35,61.9166667]).appendArc([47.35,63.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([33.85,63.9166667]).appendArc([31.85,61.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([31.85,49.4166667]).appendArc([33.85,47.4166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.65,28.4166667],[47.15,28.4166667]]).appendArc([49.15,30.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([49.15,42.9166667]).appendArc([47.15,44.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([33.65,44.9166667]).appendArc([31.65,42.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([31.65,30.4166667]).appendArc([33.65,28.4166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.45,9.4166667],[46.95,9.4166667]]).appendArc([48.95,11.4166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([48.95,23.9166667]).appendArc([46.95,25.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([33.45,25.9166667]).appendArc([31.45,23.9166667],{"radius":2,"clockwise":false,"large":false}).appendPoint([31.45,11.4166667]).appendArc([33.45,9.4166667],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13.25,41.75],[26.75,41.75]]).appendArc([28.75,43.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.75,56.25]).appendArc([26.75,58.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([13.25,58.25]).appendArc([11.25,56.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,43.75]).appendArc([13.25,41.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13.25,22.75],[26.75,22.75]]).appendArc([28.75,24.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.75,37.25]).appendArc([26.75,39.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([13.25,39.25]).appendArc([11.25,37.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,24.75]).appendArc([13.25,22.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13.25,3.75],[26.75,3.75]]).appendArc([28.75,5.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.75,18.25]).appendArc([26.75,20.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([13.25,20.25]).appendArc([11.25,18.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,5.75]).appendArc([13.25,3.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,29.75],[6.75,29.75]]).appendArc([8.75,31.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,44.25]).appendArc([6.75,46.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,46.25]).appendArc([-8.75,44.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,31.75]).appendArc([-6.75,29.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,10.75],[6.75,10.75]]).appendArc([8.75,12.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,25.25]).appendArc([6.75,27.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,27.25]).appendArc([-8.75,25.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,12.75]).appendArc([-6.75,10.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,-8.25],[6.75,-8.25]]).appendArc([8.75,-6.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,6.25]).appendArc([6.75,8.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,8.25]).appendArc([-8.75,6.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,-6.25]).appendArc([-6.75,-8.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[83.8508928,-32.3798135],[96.8279257,-36.1009179]]).appendArc([99.3017239,-34.7296693],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.7471908,-22.7138981]).appendArc([101.3759422,-20.2400999],{"radius":2,"clockwise":false,"large":false}).appendPoint([88.3989093,-16.5189955]).appendArc([85.9251111,-17.8902441],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.4796442,-29.9060153]).appendArc([83.8508928,-32.3798135],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[101.5965415,-38.2556969],[113.4039076,-44.8006269]]).appendArc([116.1227662,-44.0210067],{"radius":2,"clockwise":false,"large":false}).appendPoint([122.1828865,-33.0882603]).appendArc([121.4032663,-30.3694017],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.5959002,-23.8244717]).appendArc([106.8770416,-24.6040919],{"radius":2,"clockwise":false,"large":false}).appendPoint([100.8169213,-35.5368383]).appendArc([101.5965415,-38.2556969],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}




                function preview_case_fn() {
                    

                // creating part 0 of case preview
                let preview__part_0 = panel_extrude_3_outline_fn();

                // make sure that rotations are relative
                let preview__part_0_bounds = preview__part_0.getBounds();
                let preview__part_0_x = preview__part_0_bounds[0].x + (preview__part_0_bounds[1].x - preview__part_0_bounds[0].x) / 2
                let preview__part_0_y = preview__part_0_bounds[0].y + (preview__part_0_bounds[1].y - preview__part_0_bounds[0].y) / 2
                preview__part_0 = translate([-preview__part_0_x, -preview__part_0_y, 0], preview__part_0);
                preview__part_0 = rotate([0,0,0], preview__part_0);
                preview__part_0 = translate([preview__part_0_x, preview__part_0_y, 0], preview__part_0);

                preview__part_0 = translate([0,0,0], preview__part_0);
                let result = preview__part_0;
                
            

                // creating part 1 of case preview
                let preview__part_1 = _keycap_outlines_extrude_6_outline_fn();

                // make sure that rotations are relative
                let preview__part_1_bounds = preview__part_1.getBounds();
                let preview__part_1_x = preview__part_1_bounds[0].x + (preview__part_1_bounds[1].x - preview__part_1_bounds[0].x) / 2
                let preview__part_1_y = preview__part_1_bounds[0].y + (preview__part_1_bounds[1].y - preview__part_1_bounds[0].y) / 2
                preview__part_1 = translate([-preview__part_1_x, -preview__part_1_y, 0], preview__part_1);
                preview__part_1 = rotate([0,0,0], preview__part_1);
                preview__part_1 = translate([preview__part_1_x, preview__part_1_y, 0], preview__part_1);

                preview__part_1 = translate([0,0,0], preview__part_1);
                result = result.union(preview__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return preview_case_fn();
            }

        