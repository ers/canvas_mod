/**
 * Created by JetBrains WebStorm.
 * User: eric
 * Date: 12/14/11
 * Time: 9:40 PM
 * To change this template use File | Settings | File Templates.
 */
var canvas_mod = (function(){


    init = function(){
        var canvas = $('#paper');
        console.log(canvas);
        paper.setup(canvas);
        var path = new paper.Path();
        path.strokeColor = 'black';
        var start = new paper.Point(100, 100);
        path.moveTo(start);
        path.lineTo(start.add([ 200, -50 ]));
        paper.view.draw();
    };

    return { init : init}

}());

$(document).ready(canvas_mod.init());