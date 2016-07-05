var roleArmy = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var Moveto = require('move.to');
        var Jobs = require('creep.jobs')
        if(creep.memory.destRoom != creep.room.name){
	            Moveto.move(creep,Game.flags[creep.memory.flag]);
	    }else{
	        if(creep.pos.inRangeTo(Game.flags[creep.memory.flag],20)){
                jobs.attack(creep);
              }else{
	            Moveto.move(creep,Game.flags[creep.memory.flag].pos);
	        }
	    }
    }
};

module.exports = roleArmy;
