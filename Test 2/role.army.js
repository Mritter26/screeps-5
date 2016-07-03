var roleArmy = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.HarvestTile != creep.room.name){
	            creep.moveTo(Game.flags[creep.memory.FlagName], {reusePath: 50});
	    }else{
            var hostiles = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var hostileBuildings = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            if(hostiles.length > 0){
                if(creep.attack(hostiles) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostiles, {reusePath: 50});
                }
            }else{
                if(creep.attack(hostileBuildings) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileBuildings, {reusePath: 50});
                }
            }
	    }
    }
};

module.exports = roleArmy;