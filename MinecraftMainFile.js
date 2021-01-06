var seed = random(0,1000);
var version = "1204:E-1E";
/**

__   __ __ __   __ _____ _____ ____   ___  _____ ______
| \ / | || | \  || | __| | __| | _ \ / _ \ | __| |_  _|####
|  V  | || |  \ || ||__  ||    ||_|| ||_|| ||__    || #    #
||\ /|| || ||\ \|| | __| ||    | _ \ | _ | | __|   ||    ##
|| V || || || \  | ||__  ||___ || || || || ||      ||  ##
||   || || ||  \_| |___| |___| || || || || ||      || ######

                            /\
                         //(  )\\
                        ((  \/  ))
                         \\ () //
                        ---____---
                     BENNIMUS STUDIOS
                     
NOTE: Should your game crash saying that "a function is taking too long to run", simply make an alteration in the code. As long as you don't create a new line, it will preserve the world data and keep your items.

Yes, my first game has over 13,000 votes. People tell me that it's the best game on the site, but to be honest, it's not where it is now because it's good, it's mostly because it was first. I feel bad, so here's a version of the game with less stuff but more standards. I'm more comfortable with making games but more importantly I'm older and more patient, so here's a version of Minecraft but it has patch updates!

CONTROLS:
 A / D - Go left, go right
 SPACE / W - Jump, swim up
 S - Swim down
 E - Inventory, make the death screen dance (bug)

Features:
 * Updated (homemade) 3D engine, featuring linear algebra
    rotational matrix I never bothered to understand until
    a few weeks ago, and interactive perspective! Go ahead,
    take a look around!
 * Enhanced visuals! (No more KA images, improved interface,
    neater animations)
 * Precise hitboxes! (All entities, including players, will
    be unified under the same laws of physics)
 * Bigger world! (World height increased to 128, leftbound
    world generation added, hills)
 * Less crashing! (Smart block detection, fixed bugs that
    easily could have been fixed in 1.0)
 * Better fluids! (The problem with fluids in 1.14 is that
    they tended to kinda sorta but not really exist? Point
    is they're better now)
 * Block varieties! (Same id, different look! Check out
    different trees)
 * Less things! (Give me a minute ok I'm in college now)

CHANGELOG:
 * 1204:9-27:
    + Added basic blocks
    + Added fluids
    + Added health
    + Added tools
    + Added crafting

 * 1204:X-10:
    + Recipe Book
    * Redesigned 3D engine (half as many calculations!)
    * Changed leaf design
    * Slight color modification for ores
    * Mouse functionality tweaked

 * 1204:X-12:
    + Torches
    + Coal
    + Darkness
    * Changed sky color
    * Optimized performance
    * Ore spawns underground

 * 1204:X-15:
    * Saplings and torches can no longer float.
    * Revamped selection block
        * When using tools, shows which blocks you can harvest
        * When placing blocks, shows where you can place
        * Helps orient blocks like logs and torches
    * Torches can now be placed on walls
    * Logs can now be placed sideways

 * 1204:X-16:
    + Buckets
    + Obsidian
    + Fire
    * Fixed bug: Torches and saplings crash the game when
      dropped as an item after being destroyed by water.
    * Fixed bug: Sometimes the selection box acts strange.
    * Fixed bug: give() incorrectly distributes overflow (over
      64) items.
    * Fixed bug: Items combine before they're given to the
      player, causing them to duplicate exponentially (depending
      on how many the player has)
    * Fixed bug: Lava and water can't mix
    * Raised ground level slightly

 * 1204:X-17:
    * Ruined player model
    * Fixed bug: Entities don't catch fire from the right.

 * 1204:X-19:
    + Sand
    + Gravel
    + Flint
    * Flint and Steel is now craftable
    * Blocks may have physics.
    
 * 1204:X-1X:
    * Finished adding crafting table
    * 3x3-grid items can no longer be crafted without a crafting
      table.
      
 * 1204:X-1E:
    + Caves
    * Fixed bug: Ores don't generate properly.

 * 1204:X-21:
    + Furnaces and Smelting
    + Debug Pride Wheel
    * Iron and gold now have to be smelted.
    * Breaking blocks is now satisfying.
    * Fixed bug: Water attempts to destroy itself when it flows
      into itself.
    * Enhanced performance

 * 1204:X-24:
    + Zombies
    + Pigs
    + Press F to get sick
    * Made player hitbox a bit more realistic, made player model
      bigger (0.8x1.6 -> 0.6x1.8)
    * Fixed Bug: Entity hitboxes calculate collisions on the right
      with exclusive bounds, meaning the entity "floats" on the
      wall.
    * Fixed Bug: If you hang your foot over a ledge into lava
      you accidentally dip your toe into it and take damage.
    * Fixed Additional Bugs
 
 * 1204:X-26:
    + Porkchops
    + Rotten Flesh
    * Made zombies stronger
    * Fixed Bug: Entities sometimes jump out of the water for
      no reason.
    * Fixed Bug: Mobs don't swim.
    * Fixed Bug: Gold ore has no name.
    * Performance enhancements (less fatal crashes)

 * 1204:E-01:
    + Glass
    + Flowers & Plants
    + Began adding hunger (it really doesn't do anything)
    + Sprinting
    * Sand and gravel generate in oceans

 * 1204:E-02:
    * Improved block rendering
    * Reduced number of vertexes for leaf faces from 25 to 12
    * Fixed Bug: Furnaces don't quite work

 * 1204:E-03:
    + Hunger
    * Fixed Bug: Player can sprint even while facing the wrong
      direction.
    * Fixed other bugs

 * 1204:E-04:
    + Apples
    + Golden Apples
    + Furnace Recipe Book
    * Hunger bar shakes when decreasing
 
 * 1204:E-05:
    + Chests
    * Fixed bug: Items merge incorrectly.

 * 1204:E-07:
    + Some kind of slab
    * Fixed collision errors
    * Chests now have correct collision boxes.

 * 1204:E-09:
    * Improved slab placement
    * You can now place two slabs in the same cubic meter.
    * Adjusted collision boxes
    * Slabs are now craftable (not visible in the recipe book)
    * Slabs are NOT DONE YET.
    * Improved block placement

 * 1204:E-11:
    * Day/Night Cycle
    * Improved lighting

 * 1204:E-13:
    * Finished adding slabs
    * Improved Performance
    * Fixed bug: Chests prohibited stepping when walked on top
    * Improved Physics
    * Sprinkled in some new bugs

 * 1204:E-14:
    + Creepers
    + Gunpowder
    + Explosions
    + Iron, gold, diamond blocks
    + Smelting recipe for TNT
    * Began thinking about expanding recipe book
    * Fixed bugs

 * 1204:E-18:
    + Ladders
    + Doors
    * Tweaked entity collisions
    * Fixed bug: Torches and flowers look too small.
    * Attempted to fix bug: Items ignore wall collisions.
    * Fixed rendering bugs

 * 1204:E-19: (Oops! Early release)
    + Nether
    + Nether Portals
    + Netherrack
    * Nether space is 8 times overworld space
    * Nether portal locations are stored independently and
      "linked"
    * Nether generation improved from original game
    * Nether has less things in it (I accidentally released early)

 * 1204:E-1X:
    + Soul Sand
    + Glowstone
    + Glowstone Dust
    * Nether portals have particle effects
    * Changed golden apple particle effects
    * Fixed bug: Lava and water don't place

 * 1204:E-1E:
    * Water evaporates in the Nether
    * Mobs swim
    * More interesting things generate underground
    * Fixed Bug: Mobs spawn underwater

Block ID's:
    0: Air
    1: Stone
    2: Grass
    3: Dirt
    4: Cobblestone
    5: Wooden Planks
        0: Oak
        1: Spruce
        2: Birch
    6: Log
        0: Oak
        1: Spruce
        2: Birch
    7: Leaves
        0: Oak
        1: Spruce
        2: Birch
    8: Bedrock
    9: Water (bucket)
    10: Lava (bucket)
    11: Sapling
        0: Oak
        1: Spruce
        2: Birch
    12: TNT
    13: Coal Ore
    14: Iron Ore
    15: Gold Ore
    16: Diamond Ore
    17: Torch
    18: Fire
    19: Obsidian
    20: Sand
    21: Gravel
    22: Crafting Table
    23: Furnace
    24: Lit Furnace
    25: Glass
    26: Flower
        0: Poppy
        1: Dandelion
    27: Grass
    28: Chest
    29: Smooth Stone Slab
    30: Stone Slab
    31: Cobblestone Slab
    32: Wooden Slab
        0: Oak
        1: Spruce
        2: Birch
    33: Unnamed Slab 1
    34: Unnamed Slab 2
    35: Unnamed Slab 3
    36: Double Slab
    37: Smooth Stone
    38: Iron Block
    39: Gold Block
    40: Diamond Block
    41: Ladder
    42: Door
        0: Oak
        1: Spruce
        2: Birch
    43: Nether Portal
    44: Netherrack
    45: Soul Sand
    46: Glowstone
    47: Mushroom
        0: Red
        1: Brown
    300: Pickaxe*
    301: Shovel*
    302: Axe*
    303: Hoe*
    304: Sword*
    305: Stick
    306: Ingot
        0: Iron
        1: Gold
        2: Diamond
    *:
        0: Wooden
        1: Stone
        3: Iron
        4: Gold
        5: Diamond
        6: Netherite (unobtainable)
    307: Coal
    308: Bucket
    309: Flint
    310: Raw Porkchop
    311: Cooked Porkchop
    312: Rotten Flesh
    313: Apple
    314: Golden Apple
    315: Gunpowder
    316: Glowstone Dust
**/

var fpsLog = [];
var stages = [];
var opaque = [0,3,3,3,3,3,3,2,3,1,1,0,3,3,3,3,3,0,0,3,3,3,3,3,3,0,0,0,0,1,1,1,1,1,1,1,3,3,3,3,3,0,0,0,3,3,3,0];
var solid = [0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0];
var back = [];
back[41] = 1;
var inBack = function(block,tag){
    switch(block){
        case 42:
            return tag.open;
        default:
            return back[block];
    }
};
var slab = [];
for(var i = 29; i < 36; i++){slab[i] = true;}
var dim = [];
for(var i = 0; i < solid.length; i++){
    dim[i] = [40,0,0,40];
}
dim[28] = [35,2.5,0,37.5];
dim[45] = [35,0,0,40];
var dimen = function(block,tag){
    if(slab[block]){
        var t;
        if(tag){
            t = tag.orientation;
        }else{
            t = 0;
        }
        return [t===0?20:40,t===1?20:0,t===2?20:0,t===3?20:40];
    }else if(block===42){
        if(tag.open){
            return [0,0,0,0];
        }else if(tag.align===RIGHT){
            return [40,30,0,40];
        }else{
            return [40,0,0,10];
        }
    }
    return dim[block];
};
solid[undefined]=true;
var fluid = [2,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maxStax = [0,64,64,64,64,64,64,64,64,1,1,64,64,64,64,64,64,64,1,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64];
var imaxStax = [1,1,1,1,1,64,64,64,16,64,64,64,64,64,64,64,64,64,64,64];
var durability = [59,131,250,32,1561,2031];
var falls = [];
falls[20] = true;falls[21] = true;
var blockColor = [
    ,
    [color(140)],
    [color(91, 168, 40)],
    [color(120,70,10)],
    [color(140)],
    [color(168, 138, 94),color(130, 99, 76),color(194, 175, 153)],
    [color(168, 138, 94),color(130, 99, 76),color(194, 175, 153)],
    [color(64, 166, 64),color(24, 102, 61),color(126, 173, 126)],
    [color(50)],
    ,,
    [color(64, 166, 64),color(24, 102, 61),color(126, 173, 126)],
    [color(255,0,0)],
    [color(50)],
    [color(222, 177, 109)],
    [color(255, 204, 0)],
    [color(89, 230, 255)],
    [color(122, 94, 55)],
    ,
    [color(41, 13, 66)],
    [color(219, 201, 153)],
    [color(115,110,117)],
    [color(168, 138, 94)],
    [color(140)],
    [color(140)],
    [color(186, 218, 224)],
    [color(207, 54, 54),color(245, 224, 103)],
    [color(121, 196, 71)],
    [color(145, 112, 36)],
    [color(180)],
    [color(140)],
    [color(140)],
    [color(168, 138, 94),color(130, 99, 76),color(194, 175, 153)],
    [color(255, 0, 0)],
    [color(0,255,0)],
    [color(0,0,255)],
    ,
    [color(180)],
    [color(200)],
    [color(255, 204, 0)],
    [color(89, 230, 255)],
    [color(168,138,94)],
    [color(168, 138, 94),color(130, 99, 76),color(194, 175, 153)],
    [color(141, 0, 217)],
    [color(117, 2, 16)],
    [color(102, 45, 16)],
    [color(255, 227, 150)],
    [color(255, 91, 54),color(171, 141, 93)]
    ];
var damage = [
    [2,3,4,2,5,6],
    [2.5,3.5,4.5,2.5,5.5,6.5],
    [3,4,5,3,6,7],
    [1,2,3,1,4,4],
    [4,5,6,4,7,8]
];
var stick = [];
var istick = [true,true,true,true,true,true];
var harvestLevel = [0,1,0,0,1,0,0,0,0,0,0,0,0,1,2,3,3,0,0,5,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,2,3,3,0,0,0,1,0,0,0];
var hardness = [0,135,50,45,180,180,180,18,-1,-1,-1,1,1,270,270,270,270,1,1,4500,45,54,225,315,315,18,1,1,225,180,180,180,180,18,18,18,180,180,450,270,450,56,270,-1,36,45,27,1];
var flammable = [];
flammable[5] = [5,20];
flammable[6] = [5,5];
flammable[7] = [30,30];
flammable[12] = [15,100];
flammable[22] = [5,0];
flammable[26] = [60,100];
flammable[27] = [60,100];
flammable[28] = [5,0];
flammable[32] = [5,20];
flammable[42] = [5,0];
var toolReq = [0,1,2,2,1,3,3,4,0,0,0,0,0,1,1,1,1,0,0,1,2,2,3,1,1,0,0,0,3,1,1,1,3,0,0,0,0,1,1,1,1,3,3,0,1,2,0,0];
var luminosity = [0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,14,15,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,15,0];
var usingTool = 0;
var menu = "logo";
var menu2 = "";
var action = "free";
var actionTimer = 0;
var invBlock = [0,0];
var daytime = 0;
var pdl = 15;
var daylight = 15;
var nightvision = false;
var portalCooldown = 0;
var blockName = [
    ["Air"],
    ["Stone"],
    ["Grass Block"],
    ["Dirt"],
    ["Cobblestone"],
    ["Oak Planks","Spruce Planks","Birch Planks"],
    ["Oak Log","Spruce Log","Birch Log"],
    ["Oak Leaves","Spruce Leaves","Birch Leaves"],
    ["Bedrock"],
    ["Water"],
    ["Lava"],
    ["Oak Sapling","Spruce Sapling","Birch Sapling"],
    ["TNT","TNT"],
    ["Coal Ore"],
    ["Iron Ore"],
    ["Gold Ore"],
    ["Diamond Ore"],
    ["Torch"],
    ["Fire"],
    ["Obsidian"],
    ["Sand"],
    ["Gravel"],
    ["Crafting Table"],
    ["Furnace"],
    ["Furnace"],
    ["Glass"],
    ["Poppy","Dandelion"],
    ["Grass"],
    ["Chest"],
    ["Smooth Stone Slab"],
    ["Stone Slab"],
    ["Cobblestone Slab"],
    ["Oak Slab","Spruce Slab","Birch Slab"],
    ["Cherry Slab"],
    ["Green Apple Slab"],
    ["Blue Raspberry Slab"],
    ["Double Slab"],
    ["Smooth Stone"],
    ["Block of Iron"],
    ["Block of Gold"],
    ["Block of Diamond"],
    ["Ladder"],
    ["Oak Door","Spruce Door","Birch Door"],
    ["Nether Portal"],
    ["Netherrack"],
    ["Soul Sand"],
    ["Glowstone"],
    ["Red Mushroom","Brown Mushroom"]
];
var itemName = [
    [""],
    ["Stone"],
    ["Grass Block"],
    ["Dirt"],
    ["Cobblestone"],
    ["Oak Planks","Spruce Planks","Birch Planks"],
    ["Oak Log","Spruce Log","Birch Log"],
    ["Oak Leaves","Spruce Leaves","Birch Leaves"],
    ["Bedrock"],
    ["Water Bucket"],
    ["Lava Bucket"],
    ["Oak Sapling","Spruce Sapling","Birch Sapling"],
    ["TNT","TNT"],
    ["Coal Ore"],
    ["Iron Ore"],
    ["Gold Ore"],
    ["Diamond Ore"],
    ["Torch"],
    ["Flint and Steel"],
    ["Obsidian"],
    ["Sand"],
    ["Gravel"],
    ["Crafting Table"],
    ["Furnace"],
    ["Lit Furnace"],
    ["Glass"],
    ["Poppy","Dandelion"],
    ["Grass"],
    ["Chest"],
    ["Smooth Stone Slab"],
    ["Stone Slab"],
    ["Cobblestone Slab"],
    ["Oak Slab","Spruce Slab","Birch Slab"],
    ["Cherry Slab"],
    ["Green Apple Slab"],
    ["Blue Raspberry Slab"],
    ["Double Slab"],
    ["Smooth Stone"],
    ["Block of Iron"],
    ["Block of Gold"],
    ["Block of Diamond"],
    ["Ladder"],
    ["Oak Door","Spruce Door","Birch Door"],
    ["Nether Portal"],
    ["Netherrack"],
    ["Soul Sand"],
    ["Glowstone"],
    ["Red Mushroom","Brown Mushroom"]
];
var iitemName = [
    ["Wooden Pickaxe","Stone Pickaxe","Iron Pickaxe","Gold Pickaxe","Diamond Pickaxe","Netherite Pickaxe"],
    ["Wooden Shovel","Stone Shovel","Iron Shovel","Gold Shovel","Diamond Shovel","Netherite Shovel"],
    ["Wooden Axe","Stone Axe","Iron Axe","Gold Axe","Diamond Axe","Netherite Axe"],
    ["Wooden Hoe","Stone Hoe","Iron Hoe","Gold Hoe","Diamond Hoe","Netherite Hoe"],
    ["Wooden Sword","Stone Sword","Iron Sword","Gold Sword","Diamond Sword","Netherite Sword"],
    ["Stick"],
    ["Iron Ingot","Gold Ingot","Diamond"],
    ["Coal","Charcoal"],
    ["Bucket"],
    ["Flint"],
    ["Raw Porkchop"],
    ["Cooked Porkchop"],
    ["Rotten Flesh"],
    ["Apple"],
    ["Golden Apple"],
    ["Gunpowder"],
    ["Glowstone Dust"]
];
var fuel = [0,0,0,0,0,900,900,0,0,0,60000,300,0,0,0,0,0,0,0,0,0,0,900,0,0,0,0,0,900,0,0,0,450,0,0,0,0,0,0,0,0,900,600,0,0,0,0,0];
var ifuel = [0,0,0,0,0,300,0,4800,0,0,0,0,0,0,0,0];
var food = [];
food[310] = [3,1.8];
food[311] = [8,12.8];
food[312] = [4,0.8];
food[313] = [4,2.4];
food[314] = [4,20];
for(var i = 0; i < imaxStax.length; i++){
    maxStax[i+300] = imaxStax[i];
    itemName[i+300] = iitemName[i];
    stick[i+300] = istick[i];
    fuel[i+300] = ifuel[i];
}
var Item;
var defaultTag = function(id,type){
    switch(id){
        case 6:
            return {horizontal:false};
        case 9:
            return {level:0,h1:1,h2:1,flow:15};
        case 10:
            return {level:0,h1:1,h2:1,flow:120};
        case 11:
            return {life:floor(random(18000,36000))};
        case 17:
            return {wall:0};
        case 18:
            return {life:15,durability:64,maxDurability:64};
        case 23:
        case 24:
            return {contents:[new Item(0,0,0),new Item(0,0,0),new Item(0,0,0)],fuel:0,maxFuel:0,progress:0};
        case 28:
            var contents = [];
            for(var i = 0; i < 27; i++){
                contents[i] = new Item(0,0,0);
            }
            return {contents:contents};
        case 29:case 30:case 31:case 32:case 33:case 34:case 35:
            return {orientation:0};
        case 36:
            return {horizontal:false,a:29,b:29,at:0,bt:0};
        case 42:
            return {top:false,open:false,align:LEFT};
        case 300:
        case 301:
        case 302:
        case 303:
        case 304:
            return {durability:durability[type],maxDurability:durability[type],damage:damage[id-300][type]};
        case 314:
            return {effects:[]};
    }
    return {};
};
Item = function(id,count,type,tag){
    this.id = id;
    this.count = count;
    this.type = type;
    if(!this.tag){
        this.tag = defaultTag(id,type);
    }else{
        this.tag = tag;
    }
};
var harvest = [
    [{}], //AIR
    [{
        drops: [new Item(4,1,0)], //STONE
        odds: [1]
    }],[{
        drops: [new Item(3,1,0)], //GRASS BLOCK
        odds: [1]
    }],[{
        drops: [new Item(3,1,0)], //DIRT
        odds: [1]
    }],[{
        drops: [new Item(4,1,0)], //COBBLESTONE
        odds: [1]
    }],[
        {
            drops: [new Item(5,1,0)], //OAK PLANKS
            odds: [1]
        },{
            drops: [new Item(5,1,1)], //SPRUCE PLANKS
            odds: [1]
        },{
            drops: [new Item(5,1,2)], //BIRCH PLANKS
            odds: [1]
        }
    ],[
        {
            drops: [new Item(6,1,0)], //OAK LOG
            odds: [1]
        },{
            drops: [new Item(6,1,1)], //SPRUCE LOG
            odds: [1]
        },{
            drops: [new Item(6,1,2)], //BIRCH LOG
            odds: [1]
        }
    ],[
        {
            drops: [new Item(11,1,0),
                    new Item(305,1,0),
                    new Item(313,1,0)], //OAK LEAVES
            odds: [0.05, 0.02, 0.01],
            count: [[1,1],[1,2],[1,1]]
        },{
            drops: [new Item(11,1,1),
                    new Item(305,1,0)], //SPRUCE LEAVES
            odds: [0.05, 0.02],
            count: [[1,1],[1,2]]
        },{
            drops: [new Item(11,1,2),
                    new Item(305,1,0)], //BIRCH LEAVES
            odds: [0.05, 0.02],
            count: [[1,1],[1,2]]
        }
    ],[{}], //BEDROCK
    [{}], //WATER
    [{}], //LAVA
    [
        {
            drops: [new Item(11,1,0)], //OAK SAPLING
            odds: [1]
        },{
            drops: [new Item(11,1,1)], //SPRUCE SAPLING
            odds: [1]
        },{
            drops: [new Item(11,1,2)], //BIRCH SAPLING
            odds: [1]
        }
    ],[{
        drops: [new Item(12,1,0)], //TNT
        odds: [1]
    }],[{
        drops: [new Item(307,1,0)], //COAL ORE
        odds: [1],
        xp: [0,2]
    }],[{
        drops: [new Item(14,1,0)], //IRON ORE
        odds: [1]
    }],[{
        drops: [new Item(15,1,0)], //GOLD ORE
        odds: [1]
    }],[{
        drops: [new Item(306,1,2)], //DIAMOND ORE
        odds: [1],
        xp: [4,7]
    }],[{
        drops: [new Item(17,1,0)], //TORCH
        odds: [1],
    }],[{}],[{
        drops: [new Item(19,1,0)], //OBSIDIAN
        odds: [1],
    }],[{
        drops: [new Item(20,1,0)], //SAND
        odds: [1],
    }],[{
        drops: [new Item(21,1,0),new Item(309,1,0)], //GRAVEL
        odds: [1,0.1]
    }],[{
        drops: [new Item(22,1,0)], //CRAFTING TABLE
        odds: [1]
    }],[{
        drops: [new Item(23,1,0)], //FURNACE
        odds: [1]
    }],[{
        drops: [new Item(23,1,0)], //LIT FURNACE
        odds: [1]
    }],
    [{}], //GLASS
    [
        {
            drops: [new Item(26,1,0)], //POPPY
            odds: [1]
        },
        {
            drops: [new Item(26,1,1)], //DANDELION
            odds: [1]
        }
    ],
    [{}], //GRASS
    [{
        drops: [new Item(28,1,0)], //CHEST
        odds: [1]
    }],[{
        drops: [new Item(29,1,0)], //SMOOTH STONE SLAB
        odds: [1]
    }],[{
        drops: [new Item(30,1,0)], //STONE SLAB
        odds: [1]
    }],[{
        drops: [new Item(31,1,0)], //COBBLESTONE SLAB
        odds: [1]
    }],[
        {
            drops: [new Item(32,1,0)], //OAK SLAB
            odds: [1]
        },{
            drops: [new Item(32,1,1)], //SPRUCE SLAB
            odds: [1]
        },{
            drops: [new Item(32,1,2)], //BIRCH SLAB
            odds: [1]
        }
    ],[{
        drops: [new Item(33,1,0)],
        odds: [1]
    }],[{
        drops: [new Item(34,1,0)], //These three aren't used yet
        odds: [1]
    }],[{
        drops: [new Item(35,1,0)],
        odds: [1]
    }],[{}], //DOUBLE SLAB (More complicated than a loot table)
    [{
        drops: [new Item(37,1,0)], //SMOOTH STONE
        odds: [1]
    }],[{
        drops: [new Item(38,1,0)], //IRON BLOCK
        odds: [1]
    }],[{
        drops: [new Item(39,1,0)], //GOLD BLOCK
        odds: [1]
    }],[{
        drops: [new Item(40,1,0)], //DIAMOND BLOCK
        odds: [1]
    }],[{
        drops: [new Item(41,1,0)], //LADDER
        odds: [1]
    }],[
        {
            drops: [new Item(42,1,0)], //OAK DOOR
            odds: [1]
        },{
            drops: [new Item(42,1,1)], //SPRUCE DOOR
            odds: [1]
        },{
            drops: [new Item(42,1,2)], //BIRCH DOOR
            odds: [1]
        }
    ],[{}],
    [{
        drops: [new Item(44,1,0)], //NETHERRACK
        odds: [1]
    }],[{
        drops: [new Item(45,1,0)], //SOUL SAND
        odds: [1]
    }],[{
        drops: [new Item(316,1,0)], //GLOWSTONE
        odds: [1],
        count: [[2,4]]
    }],[
        {
            drops: [new Item(47,1,0)], //RED MUSHROOM
            odds: [1],
        },{
            drops: [new Item(47,1,1)], //BROWN MUSHROOM
            odds: [1],
        }
    ]
];
var craftGrid = [[],[],[]];
for(var i = 0; i < 9; i++){
    craftGrid[floor(i/3)][i%3] = new Item(0,0,0);
}
var Recipes = [
    {
        type: "craft",
        shapeless: true,
        recipe: [6],
        types: [0],
        result: new Item(5,4,0)
    },{
        type: "craft",
        shapeless: true,
        recipe: [6],
        types: [1],
        result: new Item(5,4,1)
    },{
        type: "craft",
        shapeless: true,
        recipe: [6],
        types: [2],
        result: new Item(5,4,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5],[5,5]],
        result: new Item(22,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5],
            [5]
        ],
        result: new Item(305,4,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5,5,5],
            [5,0,5],
            [5,5,5]
        ],
        result: new Item(28,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5,5,5],
            [0,305,0],
            [0,305,0]
        ],
        result: new Item(300,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5,5],
            [305,5],
            [305,0]
        ],
        result: new Item(302,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5,5],
            [305,0],
            [305,0]
        ],
        result: new Item(303,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5],
            [305],
            [305]
        ],
        result: new Item(301,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [5],
            [5],
            [305]
        ],
        result: new Item(304,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4,4,4],
            [0,305,0],
            [0,305,0]
        ],
        result: new Item(300,1,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4,4],
            [305,4],
            [305,0]
        ],
        result: new Item(302,1,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4,4],
            [305,0],
            [305,0]
        ],
        result: new Item(303,1,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4],
            [305],
            [305]
        ],
        result: new Item(301,1,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4],
            [4],
            [305]
        ],
        result: new Item(304,1,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [4,4,4],
            [4,0,4],
            [4,4,4]
        ],
        result: new Item(23,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306,306],
            [0,305,0],
            [0,305,0]
        ],
        types: [[0,0,0],[0,0,0],[0,0,0]],
        result: new Item(300,1,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,306],
            [305,0]
        ],
        types: [[0,0],[0,0],[0,0]],
        result: new Item(302,1,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,0],
            [305,0]
        ],
        types: [[0,0],[0,0],[0,0]],
        result: new Item(303,1,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [305],
            [305]
        ],
        types: [[0],[0],[0]],
        result: new Item(301,1,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [306],
            [305]
        ],
        types: [[0],[0],[0]],
        result: new Item(304,1,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306,306],
            [0,305,0],
            [0,305,0]
        ],
        types: [[1,1,1],[0,0,0],[0,0,0]],
        result: new Item(300,1,3)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,306],
            [305,0]
        ],
        types: [[1,1],[0,1],[0,0]],
        result: new Item(302,1,3)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,0],
            [305,0]
        ],
        types: [[1,1],[0,0],[0,0]],
        result: new Item(303,1,3)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [305],
            [305]
        ],
        types: [[1],[0],[0]],
        result: new Item(301,1,3)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [306],
            [305]
        ],
        types: [[1],[1],[0]],
        result: new Item(304,1,3)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306,306],
            [0,305,0],
            [0,305,0]
        ],
        types: [[2,2,2],[0,0,0],[0,0,0]],
        result: new Item(300,1,4)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,306],
            [305,0]
        ],
        types: [[2,2],[0,2],[0,0]],
        result: new Item(302,1,4)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306],
            [305,0],
            [305,0]
        ],
        types: [[2,2],[0,0],[0,0]],
        result: new Item(303,1,4)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [305],
            [305]
        ],
        types: [[2],[0],[0]],
        result: new Item(301,1,4)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306],
            [306],
            [305]
        ],
        types: [[2],[2],[0]],
        result: new Item(304,1,4)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [307],
            [305]
        ],
        result: new Item(17,4,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,0,306],
            [0,306,0]
        ],
        types: [[0,0,0],[0,0,0]],
        result: new Item(308,1,0)
    },{
        type: "craft",
        shapeless: true,
        recipe: [306,309],
        types: [0,0],
        result: new Item(18,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [
            [306,306,306],
            [306,313,306],
            [306,306,306]
        ],
        types: [[1,1,1],[1,0,1],[1,1,1]],
        result: new Item(314,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[37,37,37]],
        result: new Item(29,6,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[1,1,1]],
        result: new Item(30,6,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[4,4,4]],
        result: new Item(31,6,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5,5]],
        types: [[0,0,0]],
        result: new Item(32,6,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5,5]],
        types: [[1,1,1]],
        result: new Item(32,6,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5,5]],
        types: [[2,2,2]],
        result: new Item(32,6,2)
    },{
        type: "craft",
        shapeless: true,
        recipe: [38],
        result: new Item(306,9,0)
    },{
        type: "craft",
        shapeless: true,
        recipe: [39],
        result: new Item(306,9,1)
    },{
        type: "craft",
        shapeless: true,
        recipe: [40],
        result: new Item(306,9,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[306,306,306],[306,306,306],[306,306,306]],
        types: [[0,0,0],[0,0,0],[0,0,0]],
        result: new Item(38,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[306,306,306],[306,306,306],[306,306,306]],
        types: [[1,1,1],[1,1,1],[1,1,1]],
        result: new Item(39,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[306,306,306],[306,306,306],[306,306,306]],
        types: [[2,2,2],[2,2,2],[2,2,2]],
        result: new Item(40,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[315,20,315],[20,315,20],[315,20,315]],
        result: new Item(12,1,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[305,0,305],[305,305,305],[305,0,305]],
        result: new Item(41,3,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5],[5,5],[5,5]],
        types: [[0,0],[0,0],[0,0]],
        result: new Item(42,3,0)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5],[5,5],[5,5]],
        types: [[1,1],[1,1],[1,1]],
        result: new Item(42,3,1)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[5,5],[5,5],[5,5]],
        types: [[2,2],[2,2],[2,2]],
        result: new Item(42,3,2)
    },{
        type: "craft",
        shapeless: false,
        recipe: [[316,316],[316,316]],
        result: new Item(46,1,0)
    },
    
    {
        type: "smelt",
        item: 4,
        result: new Item(1,1,0)
    },{
        type: "smelt",
        item: 6,
        result: new Item(307,1,1)
    },{
        type: "smelt",
        item: 13,
        result: new Item(307,1,0)
    },{
        type: "smelt",
        item: 14,
        result: new Item(306,1,0)
    },{
        type: "smelt",
        item: 15,
        result: new Item(306,1,1)
    },{
        type: "smelt",
        item: 16,
        result: new Item(306,1,2)
    },{
        type: "smelt",
        item: 310,
        result: new Item(311,1,0)
    },{
        type: "smelt",
        item: 20,
        result: new Item(25,1,0)
    },{
        type: "smelt",
        item: 1,
        result: new Item(37,1,0)
    },{
        type: "smelt",
        item: 12,
        result: new Item(40,1,0)
    }
];
var groundLevel = function(x){
    return floor(noise(seed,x/200)*160)-10;
};
var world = [];
var worldType = [];
var worldTag = [];
var entLoc = [];
var light = [];
var sunlight = [];
var dimension = 0;
var debugMode = false;
var worldSpawn = [0,groundLevel(0)];
var sprintTimer = 0;
var walking = false;
var sprinting = 0;
var fire = [[],[],[]];
var grass = [
    [0,40],
    [5,25],
    [3,10],
    [8,25],
    [7,35],
    [10,34],
    [12,16],
    [11,5],
    [15,18],
    [16,33],
    [20,0],
    [23,33],
    [23,23],
    [27,5],
    [27,21],
    [29,35],
    [30,20],
    [34,37],
    [36,28],
    [35,13],
    [39,27],
    [40,40]
];
for(var d = 0; d < 2; d++){
    world[d] = [];worldType[d] = [];
    worldTag[d] = [];light[d] = [];
    sunlight[d] = [];
    for(var i = 0; i < 128; i++){
        world[d][i] = [];
        worldType[d][i] = [];
        worldTag[d][i] = [];
        light[d][i] = [];
        sunlight[d][i] = [];
    }
}
var getWorldTag = function(x,y){
    try{
        if(worldTag[dimension][y]&&worldTag[dimension][y][x]){
            return worldTag[dimension][y][x];
        }
    }catch(er){}
    return 0;
};
var getWorldType = function(x,y){
    try{
        if(worldType[dimension][y]&&worldType[dimension][y][x]){
            return worldType[dimension][y][x];
        }
    }catch(er){}
    return 0;
};
var getLightVal = function(x,y){
    try{
        if(light[dimension][y]&&light[dimension][y][x]){
            return light[dimension][y][x];
        }
    }catch(er){}
    return 0;
};
var getLight = function(x,y){
    try{
        if(light[dimension][y]&&light[dimension][y][x]){
            return light[dimension][y][x]===16?daylight:light[dimension][y][x];
        }
    }catch(er){}
    return 0;
};
var getWorld = function(x,y){
    if(world[dimension][y]&&world[dimension][y][x]){
        return world[dimension][y][x];
    }
    return 0;
};
var lightUpdated = false;
var setWorld = function(x,y,b){
    if(world[dimension][y]){
        world[dimension][y][x] = b;
    }
    lightUpdated = false;
};
var setWorldType = function(x,y,b){
    if(worldType[dimension][y]){
        worldType[dimension][y][x] = b;
    }
};
var setWorldTag = function(x,y,b){
    if(worldTag[dimension][y]){
        worldTag[dimension][y][x] = b;
    }
};
var setLight = function(x,y,b){
    if(light[dimension][y]){
        light[dimension][y][x] = b;
    }
};
var collision = function(x,y,xx,yy){
    var elBox = dimen(getWorld(x,y),getWorldTag(x,y));
    xx = xx-x*40;yy = yy-y*40;
    if(yy<elBox[0]&&xx>elBox[1]&&yy>elBox[2]&&xx<elBox[3]){
        return true;
    }
};
var worldFF = function(x,y){
    var xx = floor(x/40);
    var yy = floor(y/40);
    if(collision(xx,yy,x,y)){
        return [getWorld(xx,yy),getWorldTag(xx,yy)];
    }
    return [0,{}];
};
var worldCF = function(x,y){
    var xx = ceil(x/40)-1;
    var yy = floor(y/40);
    if(collision(xx,yy,x,y)){
        return [getWorld(xx,yy),getWorldTag(xx,yy)];
    }
    return [0,{}];
};
var worldFC = function(x,y){
    var xx = floor(x/40);
    var yy = ceil(y/40)-1;
    if(collision(xx,yy,x,y)){
        return [getWorld(xx,yy),getWorldTag(xx,yy)];
    }
    return [0,{}];
};
var worldCC = function(x,y){
    var xx = ceil(x/40)-1;
    var yy = ceil(y/40)-1;
    if(collision(xx,yy,x,y)){
        return [getWorld(xx,yy),getWorldTag(xx,yy)];
    }
    return [0,{}];
};
var cantplace = false;
var chunksGenerated = [[],[]];
var sX = 0;
var sY = 0;
var mxRot = 0;
var myRot = 0;
var xRot = 0;
var yRot = 0;
var psp = max(width,height);
var mouseDown = false;
var breakingBlock = [0,0];
var blockBreak = 0;
var sx = 0,cx = 1;
var sy = 0,cy = 1;
var rx = atan(psp/width);
var ry = atan(psp/height);
var distortion = 0;
var toDistort = 0;
var X3D = function(x,y,z){
    var xx = x*cx - z*sx;
    z = x*sx + z*cx;
    x = xx;
    z = y*sy+ z*cy;
    return x*psp/(psp+z);
};
var Y3D = function(x,y,z){
    z = x*sx + z*cx;
    var yy = y*cy - z*sy;
    z = y*sy + z*cy;
    y = yy;
    return y*psp/(psp+z);
};
var M3D = function(A){
    var hA = A.length;
    if(hA){
        var B = [];
        var C = [];
        for(var i = 0; i < hA; i++){
            if(A[i]){
                B[i] = [];
                B[i][0] = A[i][0]*cx - A[i][2]*sx;
                B[i][2] = A[i][0]*sx + A[i][2]*cx;
                A[i][2] = B[i][2];
                B[i][1] = A[i][1]*cy - A[i][2]*sy;
                B[i][2] = A[i][1]*sy + A[i][2]*cy;
                C[i] = [];
                C[i][0] = B[i][0]*psp/(psp+B[i][2]);
                C[i][1] = B[i][1]*psp/(psp+B[i][2]);
            }
        }
        return C;
    }
    return null;
};
var elColor = [color(255),color(200),color(150),color(100)];
var fill3 = function(a,b,c,d){elColor = [a,b,c,d];};
var quad3 = function(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
    var M = M3D([[x1,y1,z1],[x2,y2,z2],[x3,y3,z3],[x4,y4,z4]]);
    quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
};
var triangle3 = function(x1,y1,z1,x2,y2,z2,x3,y3,z3){
    var M = M3D([[x1,y1,z1],[x2,y2,z2],[x3,y3,z3]]);
    triangle(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1]);
};
var line3 = function(x1,y1,z1,x2,y2,z2){
    var M = M3D([[x1,y1,z1],[x2,y2,z2]]);
    line(M[0][0],M[0][1],M[1][0],M[1][1]);
};
var point3 = function(x,y,z){
    var M = M3D([[x,y,z]]);
    point(M[0][0],M[0][1]);
};
var vertex3 = function(x,y,z){
    var M = M3D([[x,y,z]]);
    vertex(M[0][0],M[0][1]);
};
var cross = function(x1,y1,x2,y2,rx,ry){
    if(rx){x1 = x1-rx;x2 = x2-rx;}
    if(ry){y1 = y1-ry;y2 = y2-ry;}
    return (x1*y2)-(x2*y1);
};
var box3 = function(x,y,z,w,h,d,up,left,down,right){
    var v1,v2,v3,v4;
    if(up||left){v1 = [x,y,z+d];}
    if(up||right){v2 = [x+w,y,z+d];}
    if(down||left){v3 = [x,y+h,z+d];}
    if(down||right){v4 = [x+w,y+h,z+d];}
    var M = M3D([
        [x,y,z],[x+w,y,z],[x,y+h,z],[x+w,y+h,z],
        v1,v2,v3,v4
    ]);
    if(up&&cross(M[1][0],M[1][1],M[4][0],M[4][1],M[0][0],M[0][1])<0){
        fill(elColor[0]);
        quad(M[0][0],M[0][1],M[1][0],M[1][1],M[5][0],M[5][1],M[4][0],M[4][1]);
    }
    if(left&&cross(M[2][0],M[2][1],M[4][0],M[4][1],M[0][0],M[0][1])>0){
        fill(elColor[2]);
        quad(M[0][0],M[0][1],M[4][0],M[4][1],M[6][0],M[6][1],M[2][0],M[2][1]);
    }
    if(down&&cross(M[2][0],M[2][1],M[7][0],M[7][1],M[3][0],M[3][1])<0){
        fill(elColor[3]);
        quad(M[2][0],M[2][1],M[3][0],M[3][1],M[7][0],M[7][1],M[6][0],M[6][1]);
    }
    if(right&&cross(M[1][0],M[1][1],M[7][0],M[7][1],M[3][0],M[3][1])>0){
        fill(elColor[2]);
        quad(M[1][0],M[1][1],M[3][0],M[3][1],M[7][0],M[7][1],M[5][0],M[5][1]);
    }
    fill(elColor[1]);
    quad(M[0][0],M[0][1],M[1][0],M[1][1],M[3][0],M[3][1],M[2][0],M[2][1]);
};
var Options = {
    dist: 16,
    enable3D: true,
    debugMode: false
};
var invuln = function(id){
    switch(id){
        case "item":
            return true;
    }
    if(id.substr(0,2)==="p_"){
        return true;
    }
    return false;
};
var drawBlock = function(block,x,y,neighbor,type,tag){
    x = x+sX;
    y = y+sY;
    noStroke();
    var up = opaque[neighbor[0]];
    var left = opaque[neighbor[1]];
    var down = opaque[neighbor[2]];
    var right = opaque[neighbor[3]];
    switch(block){
        case -1:
            fill3(color(0),color(0),color(0),color(0));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 1:
            fill3(color(180),color(140),color(120),color(80));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 2:
            if(opaque[neighbor[0]]<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(126, 204, 74);
                quad3(x,y,0,x+40,y,0,x+40,y,40,x,y,40);
            }
            neighbor[0] = 1;
            drawBlock(3,x-sX,y-sY,neighbor,type,tag);
            if(opaque[neighbor[1]]<3&&X3D(x,y,0)>X3D(x,y+40,40)){
                fill(57, 135, 5);
                quad3(x,y,0,x,y,40,x,y+5,40,x,y+5,0);
                triangle3(x,y+5,0,x,y+10,5,x,y+5,10);
                triangle3(x,y+5,10,x,y+12,15,x,y+5,20);
                triangle3(x,y+5,20,x,y+15,25,x,y+5,30);
                triangle3(x,y+5,30,x,y+10,35,x,y+5,40);
            }
            if(opaque[neighbor[3]]<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(54, 128, 5);
                quad3(x+40,y,0,x+40,y,40,x+40,y+5,40,x+40,y+5,0);
                triangle3(x+40,y+5,0,x+40,y+10,5,x+40,y+5,10);
                triangle3(x+40,y+5,10,x+40,y+15,15,x+40,y+5,20);
                triangle3(x+40,y+5,20,x+40,y+12,25,x+40,y+5,30);
                triangle3(x+40,y+5,30,x+40,y+10,35,x+40,y+5,40);
            }
            fill(91, 168, 40);
            quad3(x,y,0,x+40,y,0,x+40,y+5,0,x,y+5,0);
            triangle3(x,y+5,0,x+5,y+10,0,x+10,y+5,0);
            triangle3(x+10,y+5,0,x+15,y+15,0,x+20,y+5,0);
            triangle3(x+20,y+5,0,x+25,y+12,0,x+30,y+5,0);
            triangle3(x+30,y+5,0,x+35,y+10,0,x+40,y+5,0);
            break;
        case 3:
            fill3(color(150,100,70),color(120,70,10),color(100,55,5),color(70,40,0));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 4:
            drawBlock(1,x-sX,y-sY,neighbor,type,tag);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(120);
                strokeWeight(2);
                noFill();
                quad3(x+20,y,0,x,y,20,x+20,y,40,x+40,y,20);
                line3(x,y,0,x+40,y,40);
                line3(x+40,y,0,x,y,40);
                noStroke();
                strokeWeight(1);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(80);
                strokeWeight(2);
                noFill();
                quad3(x,y+20,0,x,y,20,x,y+20,40,x,y+40,20);
                line3(x,y,0,x,y+40,40);
                line3(x,y+40,0,x,y,40);
                noStroke();
                strokeWeight(1);
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(60);
                strokeWeight(2);
                noFill();
                quad3(x+20,y+40,0,x,y+40,20,x+20,y+40,40,x+40,y+40,20);
                line3(x,y+40,0,x+40,y+40,40);
                line3(x+40,y+40,0,x,y+40,40);
                noStroke();
                strokeWeight(1);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(80);
                strokeWeight(2);
                noFill();
                quad3(x+40,y+20,0,x+40,y,20,x+40,y+20,40,x+40,y+40,20);
                line3(x+40,y,0,x+40,y+40,40);
                line3(x+40,y+40,0,x+40,y,40);
                noStroke();
                strokeWeight(1);
            }
            stroke(90);
            strokeWeight(2);
            noFill();
            quad3(x+20,y,0,x,y+20,0,x+20,y+40,0,x+40,y+20,0);
            line3(x,y,0,x+40,y+40,0);
            line3(x+40,y,0,x,y+40,0);
            noStroke();
            strokeWeight(1);
            break;
        case 5:
            var st = [];
            switch(type){
                case 0:
                    fill3(color(207,179,136),color(168,138,94),color(117,96,64),color(94,77,53));
                    st[0] = color(122, 95, 61);
                    st[1] = color(92, 66, 34);
                    st[2] = color(69, 48, 21);
                    st[3] = color(77, 60, 37);
                    break;
                case 1:
                    fill3(color(158, 128, 107),color(130, 99, 76),color(102, 74, 54),color(74, 52, 36));
                    st[0] = color(82, 61, 35);
                    st[1] = color(61, 42, 18);
                    st[2] = color(33, 22, 9);
                    st[3] = color(66, 47, 21);
                    break;
                case 2:
                    fill3(color(230, 216, 200),color(194, 175, 153),color(168, 144, 116),color(156, 128, 98));
                    st[0] = color(171, 143, 109);
                    st[1] = color(143, 106, 62);
                    st[2] = color(122, 97, 69);
                    st[3] = color(112, 92, 66);
            }
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(st[0]);
                line3(x,y,10,x+40,y,10);
                line3(x,y,20,x+40,y,20);
                line3(x,y,30,x+40,y,30);
                line3(x,y,40,x+40,y,40);
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(st[1]);
                line3(x,y+10,0,x,y+10,40);
                line3(x,y+20,0,x,y+20,40);
                line3(x,y+30,0,x,y+30,40);
                line3(x,y+40,0,x,y+40,40);
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(st[2]);
                line3(x,y+40,10,x+40,y+40,10);
                line3(x,y+40,20,x+40,y+40,20);
                line3(x,y+40,30,x+40,y+40,30);
                line3(x,y+40,40,x+40,y+40,40);
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(st[1]);
                line3(x+40,y+10,0,x+40,y+10,40);
                line3(x+40,y+20,0,x+40,y+20,40);
                line3(x+40,y+30,0,x+40,y+30,40);
                line3(x+40,y+40,0,x+40,y+40,40);
                noStroke();
            }
            stroke(st[3]);
            line3(x,y+10,0,x+40,y+10,0);
            line3(x,y+20,0,x+40,y+20,0);
            line3(x,y+30,0,x+40,y+30,0);
            line3(x,y+40,0,x+40,y+40,0);
            noStroke();
            break;
        case 6:
            switch(type){
                case 0:
                    fill3(color(128, 91, 50),color(97,66,24),color(71,48,17),color(66, 42, 14));
                    break;
                case 1:
                    fill3(color(82, 40, 18),color(59,32,15),color(41,20,8),color(46,21,8));
                    break;
                case 2:
                    fill3(color(235),color(209),color(158),color(120));
                    break;
            }
        box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
        if(!tag.horizontal){
            switch(type){
            case 0:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(201, 170, 127);
                stroke(168, 138, 101);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y,i*5,x+i*5,y,40-i*5,x+40-i*5,y,40-i*5,x+40-i*5,y,i*5);
                }
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(46, 30, 9);
                strokeWeight(3);
                line3(x,y,40,x,y+40,40);
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(117, 96, 64);
                stroke(94, 78, 58);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y+40,i*5,x+i*5,y+40,40-i*5,x+40-i*5,y+40,40-i*5,x+40-i*5,y+40,i*5);
                }
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(46, 30, 9);
                strokeWeight(3);
                line3(x+40,y,40,x+40,y+40,40);
                noStroke();
            }
            stroke(61, 42, 18);
            strokeWeight(3);
            line3(x+40,y,0,x+40,y+40,0);
            line3(x,y,0,x,y+40,0);
            break;
            case 1:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(122, 94, 77);
                stroke(102, 75, 59);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y,i*5,x+i*5,y,40-i*5,x+40-i*5,y,40-i*5,x+40-i*5,y,i*5);
                }
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(36, 18, 4);
                strokeWeight(3);
                line3(x,y,40,x,y+40,40);
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(77, 58, 46);
                stroke(64, 44, 34);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y+40,i*5,x+i*5,y+40,40-i*5,x+40-i*5,y+40,40-i*5,x+40-i*5,y+40,i*5);
                }
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(51, 25, 6);
                strokeWeight(3);
                line3(x+40,y,40,x+40,y+40,40);
                noStroke();
            }
            stroke(23, 13, 2);
            strokeWeight(3);
            line3(x+40,y,0,x+40,y+40,0);
            line3(x,y,0,x,y+40,0);
            break;
            case 2:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(222, 203, 180);
                stroke(189, 157, 117);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y,i*5,x+i*5,y,40-i*5,x+40-i*5,y,40-i*5,x+40-i*5,y,i*5);
                }
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(120);
                strokeWeight(3);
                line3(x,y,40,x,y+40,40);
                noStroke();
                fill(30);
                triangle3(x,y+10,35,x,y+13,25,x,y+10,20);
                triangle3(x,y+20,15,x,y+23,10,x,y+20,5);
                triangle3(x,y+30,30,x,y+33,20,x,y+30,15);
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(143, 115, 83);
                stroke(102, 84, 64);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+i*5,y+40,i*5,x+i*5,y+40,40-i*5,x+40-i*5,y+40,40-i*5,x+40-i*5,y+40,i*5);
                }
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(120);
                strokeWeight(3);
                line3(x+40,y,40,x+40,y+40,40);
                noStroke();
                fill(30);
                triangle3(x+40,y+10,5,x+40,y+13,15,x+40,y+10,20);
                triangle3(x+40,y+20,25,x+40,y+23,30,x+40,y+20,35);
                triangle3(x+40,y+30,10,x+40,y+33,20,x+40,y+30,25);
            }
            stroke(140);
            strokeWeight(3);
            line3(x+40,y,0,x+40,y+40,0);
            line3(x,y,0,x,y+40,0);
            noStroke();
            fill(50);
            triangle3(x+5,y+10,0,x+15,y+13,0,x+20,y+10,0);
            triangle3(x+25,y+20,0,x+30,y+23,0,x+35,y+20,0);
            triangle3(x+10,y+30,0,x+20,y+33,0,x+25,y+30,0);
            break;
            }
        }else{
            switch(type){
            case 0:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(46, 30, 9);
                strokeWeight(3);
                line3(x,y,40,x+40,y,40);
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(168, 137, 98);
                stroke(143, 113, 76);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x,y+i*5,i*5,x,y+i*5,40-i*5,x,y+40-i*5,40-i*5,x,y+40-i*5,i*5);
                }
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(46, 30, 9);
                strokeWeight(3);
                line3(x,y+40,40,x+40,y+40,40);
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(168, 137, 98);
                stroke(143, 113, 76);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+40,y+i*5,i*5,x+40,y+i*5,40-i*5,x+40,y+40-i*5,40-i*5,x+40,y+40-i*5,i*5);
                }
                noStroke();
            }
            stroke(61, 42, 18);
            strokeWeight(3);
            line3(x,y+40,0,x+40,y+40,0);
            line3(x,y,0,x+40,y,0);
            break;
            case 1:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(36, 18, 4);
                strokeWeight(3);
                line3(x,y,40,x+40,y,40);
                noStroke();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(112, 84, 67);
                stroke(92, 62, 44);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x,y+i*5,i*5,x,y+i*5,40-i*5,x,y+40-i*5,40-i*5,x,y+40-i*5,i*5);
                }
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(36, 18, 4);
                strokeWeight(3);
                line3(x,y+40,40,x+40,y+40,40);
                noStroke();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(112, 84, 67);
                stroke(92, 62, 44);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+40,y+i*5,i*5,x+40,y+i*5,40-i*5,x+40,y+40-i*5,40-i*5,x+40,y+40-i*5,i*5);
                }
                noStroke();
            }
            stroke(23, 13, 2);
            strokeWeight(3);
            line3(x,y,0,x+40,y,0);
            line3(x,y+40,0,x+40,y+40,0);
            break;
            case 2:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(120);
                strokeWeight(3);
                line3(x,y,40,x+40,y,40);
                noStroke();
                fill(30);
                triangle3(x+10,y,5,x+13,y,15,x+10,y,20);
                triangle3(x+20,y,25,x+23,y,30,x+20,y,35);
                triangle3(x+30,y,10,x+33,y,20,x+30,y,25);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(189, 169, 145);
                stroke(166, 137, 105);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x,y+i*5,i*5,x,y+i*5,40-i*5,x,y+40-i*5,40-i*5,x,y+40-i*5,i*5);
                }
                noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(120);
                strokeWeight(3);
                line3(x,y+40,40,x+40,y+40,40);
                noStroke();
                fill(30);
                triangle3(x+10,y+40,35,x+13,y+40,25,x+10,y+40,20);
                triangle3(x+20,y+40,15,x+23,y+40,10,x+20,y+40,5);
                triangle3(x+30,y+40,30,x+33,y+40,20,x+30,y+40,15);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(189, 169, 145);
                stroke(166, 137, 105);
                strokeWeight(2);
                for(var i = 1; i < 5; i++){
                    quad3(x+40,y+i*5,i*5,x+40,y+i*5,40-i*5,x+40,y+40-i*5,40-i*5,x+40,y+40-i*5,i*5);
                }
                noStroke();
            }
            stroke(140);
            strokeWeight(3);
            line3(x,y,0,x+40,y,0);
            line3(x,y+40,0,x+40,y+40,0);
            noStroke();
            fill(50);
            triangle3(x+10,y+35,0,x+13,y+25,0,x+10,y+20,0);
            triangle3(x+20,y+15,0,x+23,y+10,0,x+20,y+5,0);
            triangle3(x+30,y+30,0,x+33,y+20,0,x+30,y+15,0);
            break;
            }
        }
            break;
        case 7:
            var cs = [];
            switch(type){
                case 0:
                    cs[0] = color(91, 171, 91);
                    cs[1] = color(50, 122, 50);
                    cs[2] = color(30, 87, 30);
                    cs[3] = color(64, 166, 64);
                    break;
                case 1:
                    cs[0] = color(40, 130, 84);
                    cs[1] = color(15, 79, 46);
                    cs[2] = color(9, 66, 36);
                    cs[3] = color(24, 102, 61);
                    break;
                case 2:
                    cs[0] = color(157, 184, 157);
                    cs[1] = color(108, 138, 108);
                    cs[2] = color(65, 84, 65);
                    cs[3] = color(126, 173, 126);
                    break;
            }
            if(up<2&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(cs[0]);
                beginShape();
                vertex3(x,y,0);vertex3(x,y,10);
                vertex3(x+40,y,10);vertex3(x+40,y,20);
                vertex3(x,y,20);vertex3(x,y,30);
                vertex3(x+40,y,30);vertex3(x+40,y,40);
                vertex3(x+30,y,40);vertex3(x+30,y,0);
                vertex3(x+20,y,0);vertex3(x+20,y,40);
                vertex3(x+10,y,40);vertex3(x+10,y,0);
                endShape();
            }
            if(left<2&&X3D(x,y,0)>X3D(x,y,40)){
                fill(cs[1]);
                beginShape();
                vertex3(x,y,0);vertex3(x,y,10);
                vertex3(x,y+40,10);vertex3(x,y+40,20);
                vertex3(x,y,20);vertex3(x,y,30);
                vertex3(x,y+40,30);vertex3(x,y+40,40);
                vertex3(x,y+30,40);vertex3(x,y+30,0);
                vertex3(x,y+20,0);vertex3(x,y+20,40);
                vertex3(x,y+10,40);vertex3(x,y+10,0);
                endShape();
            }
            if(down<2&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(cs[2]);
                beginShape();
                vertex3(x,y+40,40);vertex3(x,y+40,30);
                vertex3(x+40,y+40,30);vertex3(x+40,y+40,20);
                vertex3(x,y+40,20);vertex3(x,y+40,10);
                vertex3(x+40,y+40,10);vertex3(x+40,y+40,0);
                vertex3(x+30,y+40,0);vertex3(x+30,y+40,40);
                vertex3(x+20,y+40,40);vertex3(x+20,y+40,0);
                vertex3(x+10,y+40,0);vertex3(x+10,y+40,40);
                endShape();
            }
            if(right<2&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(cs[1]);
                beginShape();
                vertex3(x+40,y,40);vertex3(x+40,y,30);
                vertex3(x+40,y+40,30);vertex3(x+40,y+40,20);
                vertex3(x+40,y,20);vertex3(x+40,y,10);
                vertex3(x+40,y+40,10);vertex3(x+40,y+40,0);
                vertex3(x+40,y+30,0);vertex3(x+40,y+30,40);
                vertex3(x+40,y+20,40);vertex3(x+40,y+20,0);
                vertex3(x+40,y+10,0);vertex3(x+40,y+10,40);
                endShape();
            }
            fill(cs[3]);
            beginShape();
            vertex3(x,y,0);vertex3(x+10,y,0);
            vertex3(x+10,y+40,0);vertex3(x+20,y+40,0);
            vertex3(x+20,y,0);vertex3(x+30,y,0);
            vertex3(x+30,y+40,0);vertex3(x+40,y+40,0);
            vertex3(x+40,y+30,0);vertex3(x,y+30,0);
            vertex3(x,y+20,0);vertex3(x+40,y+20,0);
            vertex3(x+40,y+10,0);vertex3(x,y+10,0);
            endShape();
            break;
        case 8:
            fill3(color(55),color(35),color(25),color(10));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 9:
            var h1 = tag.h1*5;
            var h2 = tag.h2*5;
            if(neighbor[0]!==9){
                fill(86, 141, 199,200);
                quad3(x,y+h1,0,x+40,y+h2,0,x+40,y+h2,40,x,y+h1,40);
            }
            if(opaque[neighbor[1]]<3&&X3D(x,y,0)>X3D(x,y,40)&&neighbor[1]!==9){
                fill(44, 90, 135,200);
                quad3(x,y+h1,0,x,y+40,0,x,y+40,40,x,y+h1,40);
            }
            if(opaque[neighbor[2]]<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)&&neighbor[2]!==9){
                fill(40, 82, 122,200);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
            }
            if(opaque[neighbor[3]]<3&&X3D(x+40,y,0)<X3D(x+40,y,40)&&neighbor[3]!==9){
                fill(29, 72, 112,200);
                quad3(x+40,y+h2,0,x+40,y+40,0,x+40,y+40,40,x+40,y+h2,40);
            }
            fill(58, 108, 156,200);
            quad3(x,y+h1,0,x+40,y+h2,0,x+40,y+40,0,x,y+40,0);
            break;
        case 10:
            var h1 = tag.h1*5;
            var h2 = tag.h2*5;
            if(neighbor[0]!==10){
                fill(255, 183, 0);
                quad3(x,y+h1,0,x+40,y+h2,0,x+40,y+h2,40,x,y+h1,40);
            }
            if(opaque[neighbor[1]]<3&&X3D(x,y,0)>X3D(x,y,40)&&neighbor[1]!==10){
                fill(255, 153, 0);
                quad3(x,y+h1,0,x,y+40,0,x,y+40,40,x,y+h1,40);
            }
            if(opaque[neighbor[2]]<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)&&neighbor[2]!==10){
                fill(255, 132, 0);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
            }
            if(opaque[neighbor[3]]<3&&X3D(x+40,y,0)<X3D(x+40,y,40)&&neighbor[3]!==10){
                fill(255, 153, 0);
                quad3(x+40,y+h2,0,x+40,y+40,0,x+40,y+40,40,x+40,y+h2,40);
            }
            fill(255, 162, 0);
            quad3(x,y+h1,0,x+40,y+h2,0,x+40,y+40,0,x,y+40,0);
            break;
        case 11:
            switch(type){
            case 0:
            fill(61, 38, 10);
            quad3(x+18,y+25,22,x+20,y+25,20,x+20,y+40,20,x+18,y+40,22);
            fill(94, 64, 29);
            quad3(x+22,y+25,22,x+20,y+25,20,x+20,y+40,20,x+22,y+40,22);
            fill(45, 138, 45);
            quad3(x+5,y+25,35,x+20,y+25,20,x+20,y+10,20,x+5,y+10,35);
            quad3(x+5,y+10,35,x+20,y+10,20,x+20,y,20,x+13,y,27);
            fill(76, 161, 76);
            quad3(x+35,y+25,35,x+20,y+25,20,x+20,y+10,20,x+35,y+10,35);
            quad3(x+35,y+10,35,x+20,y+10,20,x+20,y,20,x+27,y,27);
            fill(94, 64, 29);
            quad3(x+18,y+25,18,x+20,y+25,20,x+20,y+40,20,x+18,y+40,18);
            fill(61, 38, 10);
            quad3(x+22,y+25,18,x+20,y+25,20,x+20,y+40,20,x+22,y+40,18);
            fill(76, 161, 76);
            quad3(x+5,y+25,5,x+20,y+25,20,x+20,y+10,20,x+5,y+10,5);
            quad3(x+5,y+10,5,x+20,y+10,20,x+20,y,20,x+13,y,13);
            fill(45, 138, 45);
            quad3(x+35,y+25,5,x+20,y+25,20,x+20,y+10,20,x+35,y+10,5);
            quad3(x+35,y+10,5,x+20,y+10,20,x+20,y,20,x+27,y,13);
            break;
            case 1:
            fill(59, 25, 10);
            quad3(x+18,y+25,22,x+20,y+25,20,x+20,y+40,20,x+18,y+40,22);
            fill(84, 41, 21);
            quad3(x+22,y+25,22,x+20,y+25,20,x+20,y+40,20,x+22,y+40,22);
            fill(15, 107, 44);
            triangle3(x+5,y+30,35,x+20,y+5,20,x+20,y+30,20);
            triangle3(x+10,y+15,30,x+20,y+15,20,x+20,y,20);
            fill(23, 122, 53);
            triangle3(x+35,y+30,35,x+20,y+30,20,x+20,y+5,20);
            triangle3(x+30,y+15,30,x+20,y+15,20,x+20,y,20);
            fill(59, 25, 10);
            quad3(x+18,y+30,18,x+20,y+30,20,x+20,y+40,20,x+18,y+40,18);
            fill(84, 41, 21);
            quad3(x+22,y+30,18,x+20,y+30,20,x+20,y+40,20,x+22,y+40,18);
            fill(23, 122, 53);
            triangle3(x+5,y+30,5,x+20,y+5,20,x+20,y+30,20);
            triangle3(x+10,y+15,10,x+20,y+15,20,x+20,y,20);
            fill(15, 107, 44);
            triangle3(x+35,y+30,5,x+20,y+30,20,x+20,y+5,20);
            triangle3(x+30,y+15,10,x+20,y+15,20,x+20,y,20);
            break;
            case 2:
            fill(150);
            quad3(x+18,y+25,22,x+20,y+25,20,x+20,y+40,20,x+18,y+40,22);
            fill(200);
            quad3(x+22,y+25,22,x+20,y+25,20,x+20,y+40,20,x+22,y+40,22);
            fill(125, 176, 125);
            quad3(x+5,y+25,35,x+20,y+25,20,x+20,y+10,20,x+5,y+10,35);
            quad3(x+5,y+10,35,x+20,y+10,20,x+20,y,20,x+13,y,27);
            fill(155, 191, 155);
            quad3(x+35,y+25,35,x+20,y+25,20,x+20,y+10,20,x+35,y+10,35);
            quad3(x+35,y+10,35,x+20,y+10,20,x+20,y,20,x+27,y,27);
            fill(200);
            quad3(x+18,y+25,18,x+20,y+25,20,x+20,y+40,20,x+18,y+40,18);
            fill(150);
            quad3(x+22,y+25,18,x+20,y+25,20,x+20,y+40,20,x+22,y+40,18);
            fill(155, 191, 155);
            quad3(x+5,y+25,5,x+20,y+25,20,x+20,y+10,20,x+5,y+10,5);
            quad3(x+5,y+10,5,x+20,y+10,20,x+20,y,20,x+13,y,13);
            fill(125, 176, 125);
            quad3(x+35,y+25,5,x+20,y+25,20,x+20,y+10,20,x+35,y+10,5);
            quad3(x+35,y+10,5,x+20,y+10,20,x+20,y,20,x+27,y,13);
            stroke(0);
            strokeWeight(2);
            point3(x+19,y+37,19);
            point3(x+21,y+33,19);
            point3(x+19,y+27,19);
            break;
            }
            break;
        case 12:
            switch(type){
            case 0:
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(255, 100, 100);
                quad3(x,y,0,x+40,y,0,x+40,y,40,x,y,40);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(214, 0, 0);
                quad3(x,y,0,x,y+40,0,x,y+40,40,x,y,40);
                fill(200);
                quad3(x,y+10,0,x,y+10,40,x,y+30,40,x,y+30,0);
            stroke(0);
            strokeWeight(2);
            line3(x,y+15,5,x,y+15,11);
            line3(x,y+15,8,x,y+25,8);
            line3(x,y+15,35,x,y+15,29);
            line3(x,y+15,32,x,y+25,32);
            line3(x,y+15,17,x,y+25,17);
            line3(x,y+15,23,x,y+25,23);
            line3(x,y+15,23,x,y+25,17);
            noStroke();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(181, 0, 0);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(209, 0, 0);
                quad3(x+40,y,0,x+40,y+40,0,x+40,y+40,40,x+40,y,40);
                fill(200);
                quad3(x+40,y+10,0,x+40,y+10,40,x+40,y+30,40,x+40,y+30,0);
            stroke(0);
            strokeWeight(2);
            line3(x+40,y+15,5,x+40,y+15,11);
            line3(x+40,y+15,8,x+40,y+25,8);
            line3(x+40,y+15,35,x+40,y+15,29);
            line3(x+40,y+15,32,x+40,y+25,32);
            line3(x+40,y+15,17,x+40,y+25,17);
            line3(x+40,y+15,23,x+40,y+25,23);
            line3(x+40,y+15,17,x+40,y+25,23);
            noStroke();
            }
            fill(255, 36, 36);
            quad3(x,y,0,x+40,y,0,x+40,y+40,0,x,y+40,0);
            fill(255);
            quad3(x,y+10,0,x+40,y+10,0,x+40,y+30,0,x,y+30,0);
            stroke(0);
            strokeWeight(2);
            line3(x+5,y+15,0,x+11,y+15,0);
            line3(x+8,y+15,0,x+8,y+25,0);
            line3(x+35,y+15,0,x+29,y+15,0);
            line3(x+32,y+15,0,x+32,y+25,0);
            line3(x+17,y+15,0,x+17,y+25,0);
            line3(x+23,y+15,0,x+23,y+25,0);
            line3(x+17,y+15,0,x+23,y+25,0);
            break;
            case 1:
            fill3(color(255),color(255),color(255),color(255));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
            }
            break;
        case 13:
        case 14:
        case 15:
        case 16:
            drawBlock(1,x-sX,y-sY,neighbor,type,tag);
            var c = [];
            switch(block){
                case 13:
                    c[0] = color(60);
                    c[1] = color(40);
                    c[2] = color(20);
                    c[3] = color(0);
                    break;
                case 14:
                    c[0] = color(230, 193, 161);
                    c[1] = color(224, 172, 90);
                    c[2] = color(191, 138, 53);
                    c[3] = color(135, 93, 30);
                    break;
                case 15:
                    c[0] = color(255, 241, 184);
                    c[1] = color(255, 204, 0);
                    c[2] = color(217, 174, 0);
                    c[3] = color(158, 116, 0);
                    break;
                case 16:
                    c[0] = color(189, 245, 255);
                    c[1] = color(92, 228, 255);
                    c[2] = color(46, 185, 209);
                    c[3] = color(0, 144, 173);
            }
            if(opaque[neighbor[0]]<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(c[0]);
                triangle3(x+35,y,10,x+30,y,13,x+25,y,10);
                triangle3(x+30,y,10,x+25,y,7,x+20,y,10);
                quad3(x+6,y,9,x+9,y,11,x+12,y,9,x+9,y,7);
                quad3(x+17,y,16,x+20,y,19,x+23,y,19,x+27,y,16);
                triangle3(x+10,y,25,x+18,y,28,x+23,y,25);
                quad3(x+10,y,34,x+12,y,33,x+10,y,32,x+8,y,33);
                quad3(x+29,y,26,x+32,y,26,x+34,y,23,x+27,y,23);
                triangle3(x+5,y,20,x+8,y,22,x+10,y,20);
                triangle3(x+33,y,33,x+30,y,31,x+27,y,33);
            }
            if(opaque[neighbor[1]]<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(c[2]);
                triangle3(x,y+30,5,x,y+27,10,x,y+30,15);
                triangle3(x,y+30,10,x,y+33,15,x,y+30,20);
                quad3(x,y+31,34,x,y+29,31,x,y+31,28,x,y+33,31);
                quad3(x,y+24,23,x,y+21,20,x,y+21,17,x,y+24,13);
                triangle3(x,y+15,30,x,y+12,22,x,y+15,17);
                quad3(x,y+6,30,x,y+7,28,x,y+8,30,x,y+7,32);
                quad3(x,y+14,11,x,y+14,8,x,y+17,6,x,y+17,13);
                triangle3(x,y+20,35,x,y+18,32,x,y+20,30);
                triangle3(x,y+7,7,x,y+9,10,x,y+7,13);
            }
            if(opaque[neighbor[2]]<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(c[3]);
                triangle3(x+35,y+40,30,x+30,y+40,27,x+25,y+40,30);
                triangle3(x+30,y+40,30,x+25,y+40,33,x+20,y+40,30);
                quad3(x+6,y+40,31,x+9,y+40,29,x+12,y+40,31,x+9,y+40,33);
                quad3(x+17,y+40,24,x+20,y+40,21,x+23,y+40,21,x+27,y+40,24);
                triangle3(x+10,y+40,15,x+18,y+40,12,x+23,y+40,15);
                quad3(x+10,y+40,6,x+12,y+40,7,x+10,y+40,8,x+8,y+40,7);
                quad3(x+29,y+40,14,x+32,y+40,14,x+34,y+40,17,x+27,y+40,17);
                triangle3(x+5,y+40,20,x+8,y+40,18,x+10,y+40,20);
                triangle3(x+33,y+40,7,x+30,y+40,9,x+27,y+40,7);
            }
            if(opaque[neighbor[3]]<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(c[2]);
                triangle3(x+40,y+30,35,x+40,y+27,30,x+40,y+30,25);
                triangle3(x+40,y+30,30,x+40,y+33,25,x+40,y+30,20);
                quad3(x+40,y+31,6,x+40,y+29,9,x+40,y+31,12,x+40,y+33,9);
                quad3(x+40,y+24,17,x+40,y+21,20,x+40,y+21,23,x+40,y+24,27);
                triangle3(x+40,y+15,10,x+40,y+12,18,x+40,y+15,23);
                quad3(x+40,y+6,10,x+40,y+7,12,x+40,y+8,10,x+40,y+7,8);
                quad3(x+40,y+14,29,x+40,y+14,32,x+40,y+17,34,x+40,y+17,27);
                triangle3(x+40,y+20,5,x+40,y+18,8,x+40,y+20,10);
                triangle3(x+40,y+7,33,x+40,y+9,30,x+40,y+7,27);
            }
            fill(c[1]);
            triangle3(x+35,y+30,0,x+30,y+27,0,x+25,y+30,0);
            triangle3(x+30,y+30,0,x+25,y+33,0,x+20,y+30,0);
            quad3(x+6,y+31,0,x+9,y+29,0,x+12,y+31,0,x+9,y+33,0);
            quad3(x+17,y+24,0,x+20,y+21,0,x+23,y+21,0,x+27,y+24,0);
            triangle3(x+10,y+15,0,x+18,y+12,0,x+23,y+15,0);
            quad3(x+10,y+6,0,x+12,y+7,0,x+10,y+8,0,x+8,y+7,0);
            quad3(x+29,y+14,0,x+32,y+14,0,x+34,y+17,0,x+27,y+17,0);
            triangle3(x+5,y+20,0,x+8,y+18,0,x+10,y+20,0);
            triangle3(x+33,y+7,0,x+30,y+9,0,x+27,y+7,0);
            break;
        case 17:
            switch(tag.wall){
            case 0:
            if(Y3D(x+17.5,y+15,17.5)>Y3D(x+17.5,y+15,22.5)){
                fill(255, 233, 145);
                quad3(x+17.5,y+15,17.5,x+22.5,y+15,17.5,x+22.5,y+15,22.5,x+17.5,y+15,22.5);
            }
            if(X3D(x+17.5,y+15,17.5)>X3D(x+17.5,y+15,22.5)){
                fill(255, 233, 145);
                quad3(x+17.5,y+15,17.5,x+17.5,y+20,17.5,x+17.5,y+20,22.5,x+17.5,y+15,22.5);
                fill(82, 53, 24);
                quad3(x+17.5,y+20,17.5,x+17.5,y+40,17.5,x+17.5,y+40,22.5,x+17.5,y+20,22.5);
            }
            if(X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(255, 233, 145);
                quad3(x+22.5,y+15,17.5,x+22.5,y+20,17.5,x+22.5,y+20,22.5,x+22.5,y+15,22.5);
                fill(82, 53, 24);
                quad3(x+22.5,y+20,17.5,x+22.5,y+40,17.5,x+22.5,y+40,22.5,x+22.5,y+20,22.5);
            }
            fill(255, 233, 145);
            quad3(x+17.5,y+15,17.5,x+22.5,y+15,17.5,x+22.5,y+20,17.5,x+17.5,y+20,17.5);
            fill(107, 70, 33);
            quad3(x+17.5,y+20,17.5,x+22.5,y+20,17.5,x+22.5,y+40,17.5,x+17.5,y+40,17.5);
            break;
            case 1:
            fill(255, 233, 145);
            quad3(x+8.5,y+8.4,17.5,x+12.8,y+10.9,17.5,x+12.8,y+10.9,22.5,x+8.5,y+8.4,22.5);
            fill(255, 233, 145);
            quad3(x+8.5,y+8.4,17.5,x+6,y+12.7,17.5,x+6,y+12.7,22.5,x+8.5,y+8.4,22.5);
            fill(82, 53, 24);
            quad3(x+6,y+12.7,17.5,x,y+23.1,17.5,x,y+23.1,22.5,x+6,y+12.7,22.5);
            fill(255, 233, 145);
            quad3(x+10.3,y+15.2,17.5,x+12.8,y+10.9,17.5,x+12.8,y+10.9,22.5,x+10.3,y+15.2,22.5);
            fill(82, 53, 24);
            quad3(x+10.3,y+15.2,17.5,x,y+32.1,17.5,x,y+32.1,22.5,x+10.3,y+15.2,22.5);
            fill(255, 233, 145);
            quad3(x+6,y+12.7,17.5,x+10.3,y+15.2,17.5,x+12.8,y+10.9,17.5,x+8.5,y+8.4,17.5);
            fill(107, 70, 33);
            quad3(x,y+32.1,17.5,x,y+23.1,17.5,x+6,y+12.7,17.5,x+10.33,y+15.2,17.5);
            break;
            case 2:
            fill(255, 233, 145);
            quad3(x+31.5,y+8.4,17.5,x+27.2,y+10.9,17.5,x+27.2,y+10.9,22.5,x+31.5,y+8.4,22.5);
            fill(255, 233, 145);
            quad3(x+29.7,y+15.2,17.5,x+27.2,y+10.9,17.5,x+27.2,y+10.9,22.5,x+29.7,y+15.2,22.5);
            fill(82, 53, 24);
            quad3(x+29.7,y+15.2,17.5,x+40,y+32.1,17.5,x+40,y+32.1,22.5,x+29.7,y+15.2,22.5);
            fill(255, 233, 145);
            quad3(x+31.5,y+8.4,17.5,x+34,y+12.7,17.5,x+34,y+12.7,22.5,x+31.5,y+8.4,22.5);
            fill(82, 53, 24);
            quad3(x+34,y+12.7,17.5,x+40,y+23.1,17.5,x+40,y+23.1,22.5,x+34,y+12.7,22.5);
            fill(255, 233, 145);
            quad3(x+34,y+12.7,17.5,x+29.7,y+15.2,17.5,x+27.2,y+10.9,17.5,x+31.5,y+8.4,17.5);
            fill(107, 70, 33);
            quad3(x+40,y+32.1,17.5,x+40,y+23.1,17.5,x+34,y+12.7,17.5,x+29.66,y+15.2,17.5);
            break;
            }
            break;
        case 18:
    var up = solid[neighbor[0]];
    var left = solid[neighbor[1]];
    var down = solid[neighbor[2]];
    var right = solid[neighbor[3]];
            if(Y3D(x,y+40,0)>Y3D(x,y+40,40)&&down){
                fill(255, 233, 178);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
            }
    var M;
    if(up&&!down&&Y3D(x,y,0)<Y3D(x,y,40)){
        M = [[x,y,40],[x+40,y,40]];
        for(var i = 0; i <= 20; i++){
            M[i+2] = [40+x-i*2,y,min(fire[0][i],0)+40];
            M[i+22] = [40+x-i*2,y,min(fire[1][i],0)+40];
            M[i+42] = [40+x-i*2,y,min(fire[2][i],0)+40];
        }
        M = M3D(M);
        fill(255, 94, 0);
        beginShape();
        vertex(M[0][0],M[0][1]);
        vertex(M[1][0],M[1][1]);
        for(var i = 1; i <= 20; i++){
            vertex(M[i+2][0],M[i+2][1]);
        }
        endShape();
        fill(255, 187, 0);
        beginShape();
        vertex(M[0][0],M[0][1]);
        vertex(M[1][0],M[1][1]);
        for(var i = 1; i <= 20; i++){
            vertex(M[i+22][0],M[i+22][1]);
        }
        endShape();
        fill(255, 233, 178);
        beginShape();
        vertex(M[0][0],M[0][1]);
        vertex(M[1][0],M[1][1]);
        for(var i = 1; i <= 20; i++){
            vertex(M[i+42][0],M[i+42][1]);
        }
        endShape();
    }
    if(down){
    M = [[x,y+40,40],[x+40,y+40,40]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+40-i*2,y+min(fire[0][i],0)+40,40];
        M[i+22] = [x+40-i*2,y+min(fire[1][i],0)+40,40];
        M[i+42] = [x+40-i*2,y+min(fire[2][i],0)+40,40];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
    if(left||down){
    M = [[x,y+40,0],[x,y+40,40]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x,y+min(fire[0][i],0)+40,40-i*2];
        M[i+22] = [x,y+min(fire[1][i],0)+40,40-i*2];
        M[i+42] = [x,y+min(fire[2][i],0)+40,40-i*2];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
    if(right||down){
    M = [[x+40,y+40,40],[x+40,y+40,0]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+40,y+min(fire[0][i],0)+40,i*2];
        M[i+22] = [x+40,y+min(fire[1][i],0)+40,i*2];
        M[i+42] = [x+40,y+min(fire[2][i],0)+40,i*2];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
    if(down){
    M = [[x+40,y+40,0],[x,y+40,0]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+i*2,y+min(fire[0][i],0)+40,0];
        M[i+22] = [x+i*2,y+min(fire[1][i],0)+40,0];
        M[i+42] = [x+i*2,y+min(fire[2][i],0)+40,0];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
        break;
        case 19:
            fill3(color(64,29,94),color(41,13,66),color(26,7,43),color(17,3,31));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 20:
            fill3(color(242,223,169),color(219,201,153),color(209,187,128),color(194,169,110));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 21:
            fill3(color(184,167,186),color(148,134,150),color(117,104,122),color(92,78,97));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 22:
            drawBlock(5,x-sX,y-sY,neighbor,0,0);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(186, 130, 78);
                quad3(x,y,0,x+40,y,0,x+40,y,40,x,y,40);
                fill(207, 179, 136);
                stroke(0);
                triangle3(x,y,0,x+12,y,0,x,y,12);
                triangle3(x+28,y,0,x+40,y,12,x+40,y,0);
                triangle3(x+28,y,40,x+40,y,28,x+40,y,40);
                triangle3(x,y,40,x,y,28,x+12,y,40);
                noFill();
                stroke(71, 39, 10);
                quad3(x+6,y,6,x+34,y,6,x+34,y,34,x+6,y,34);
                line3(x+15,y,6,x+15,y,34);
                line3(x+25,y,6,x+25,y,34);
                line3(x+6,y,15,x+34,y,15);
                line3(x+6,y,25,x+34,y,25);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                noStroke();
                fill(36, 19, 1);
                quad3(x,y,18,x,y,22,x,y+40,22,x,y+40,18);
                stroke(0);
                line3(x,y,40,x,y+40,40);
                fill(120, 76, 37);
                var M = M3D([
            [x,y,0],[x,y,12],[x,y+8,20],[x,y,28],[x,y,40] 
                ]);
                beginShape();
                for(var i = 0; i < M.length; i++){vertex(M[i][0],M[i][1]);}
                endShape();
                stroke(0);
                strokeWeight(2);
                line3(x,y+15,27,x,y+20,30);
                line3(x,y+15,33,x,y+20,30);
                fill(170);
                noStroke();
                triangle3(x,y+20,30,x,y+25,33,x,y+30,33);
                triangle3(x,y+20,30,x,y+25,27,x,y+30,27);
                strokeWeight(1);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                noStroke();
                fill(36, 19, 1);
                quad3(x+40,y,18,x+40,y,22,x+40,y+40,22,x+40,y+40,18);
                stroke(0);
                line3(x+40,y,40,x+40,y+40,40);
                fill(120, 76, 37);
                var M = M3D([
            [x+40,y,0],[x+40,y,12],[x+40,y+8,20],[x+40,y,28],[x+40,y,40] 
                ]);
                beginShape();
                for(var i = 0; i < M.length; i++){vertex(M[i][0],M[i][1]);}
                endShape();
            noStroke();
            fill(170);
            quad3(x+40,y+15,30,x+40,y+15,35,x+40,y+35,35,x+40,y+20,30);
            quad3(x+40,y+24,5,x+40,y+24,13,x+40,y+29,13,x+40,y+29,5);
            strokeWeight(2);
            noFill();
            stroke(0);
            quad3(x+40,y+12,30,x+40,y+12,35,x+40,y+15,35,x+40,y+15,30);
            line3(x+40,y+23,9,x+40,y+14,9);
            }
            noStroke();
            strokeWeight(1);
            fill(56, 30, 4);
            quad3(x+18,y,0,x+22,y,0,x+22,y+40,0,x+18,y+40,0);
            stroke(0);
            line3(x,y,0,x,y+40,0);
            line3(x+40,y,0,x+40,y+40,0);
            fill(150, 96, 49);
            var M = M3D([
            [x,y,0],[x+12,y,0],[x+20,y+8,0],[x+28,y,0],[x+40,y,0]
            ]);
            beginShape();
            for(var i = 0; i < M.length; i++){vertex(M[i][0],M[i][1]);}
            endShape();
            noStroke();
            fill(200);
            quad3(x+30,y+15,0,x+35,y+15,0,x+35,y+35,0,x+30,y+20,0);
            quad3(x+5,y+24,0,x+13,y+24,0,x+13,y+29,0,x+5,y+29,0);
            strokeWeight(2);
            noFill();
            stroke(0);
            quad3(x+30,y+12,0,x+35,y+12,0,x+35,y+15,0,x+30,y+15,0);
            line3(x+9,y+23,0,x+9,y+14,0);
            break;
        case 23:
        case 24:
            drawBlock(1,x-sX,y-sY,neighbor,type,tag);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(120);
                strokeWeight(2);
                noFill();
                quad3(x+20,y,0,x,y,20,x+20,y,40,x+40,y,20);
                line3(x,y,0,x+40,y,40);
                line3(x+40,y,0,x,y,40);
                stroke(65);
                quad3(x,y,0,x+40,y,0,x+40,y,40,x,y,40);
                noStroke();
                strokeWeight(1);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(80);
                strokeWeight(2);
                noFill();
                triangle3(x,y+20,0,x,y,20,x,y+20,40);
                line3(x,y,0,x,y+20,20);
                line3(x,y+20,20,x,y,40);
                noStroke();
                fill(150);
                quad3(x,y+20,0,x,y+20,40,x,y+40,40,x,y+40,0);
                fill(175);
                quad3(x,y+20,0,x,y+20,40,x,y+24,36,x,y+24,4);
                noFill();
                stroke(65);
                quad3(x,y,0,x,y+40,0,x,y+40,40,x,y,40);
                strokeWeight(1);
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(60);
                strokeWeight(2);
                noFill();
                quad3(x+20,y+40,0,x,y+40,20,x+20,y+40,40,x+40,y+40,20);
                line3(x,y+40,0,x+40,y+40,40);
                line3(x+40,y+40,0,x,y+40,40);
                stroke(65);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
                noStroke();
                strokeWeight(1);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(80);
                strokeWeight(2);
                noFill();
                triangle3(x+40,y+20,0,x+40,y,20,x+40,y+20,40);
                line3(x+40,y,0,x+40,y+40,40);
                line3(x+40,y+40,0,x+40,y,40);
                noStroke();
                fill(150);
                quad3(x+40,y+20,0,x+40,y+20,40,x+40,y+40,40,x+40,y+40,0);
                fill(175);
                quad3(x+40,y+20,0,x+40,y+20,40,x+40,y+24,36,x+40,y+24,4);
                noFill();
                stroke(65);
                quad3(x+40,y,0,x+40,y+40,0,x+40,y+40,40,x+40,y,40);
                strokeWeight(1);
            }
            stroke(90);
            strokeWeight(2);
            noFill();
            triangle3(x+20,y,0,x,y+20,0,x+40,y+20,0);
            line3(x,y,0,x+20,y+20,0);
            line3(x+40,y,0,x+20,y+20,0);
            noStroke();
            fill(180);
            quad3(x,y+20,0,x+40,y+20,0,x+40,y+40,0,x,y+40,0);
            fill(220);
            quad3(x,y+20,0,x+40,y+20,0,x+36,y+24,0,x+4,y+24,0);
            stroke(65);
            line3(x,y,0,x,y+40,0);
            line3(x+40,y,0,x+40,y+40,0);
            line3(x,y,0,x+40,y,0);
            noStroke();
            fill(80);
            var M = M3D([[x+8,y+18,0],[x+8,y+10,0],[x+12,y+5,0],[x+28,y+5,0],[x+32,y+10,0],[x+32,y+18,0]]);
            quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
            triangle(M[0][0],M[0][1],M[3][0],M[3][1],M[4][0],M[4][1]);
            fill(200);
            triangle(M[0][0],M[0][1],M[5][0],M[5][1],M[4][0],M[4][1]);
            M = M3D([[x+11,y+15,0],[x+11,y+11,0],[x+15,y+7,0],[x+25,y+7,0],[x+29,y+11,0],[x+29,y+15,0]]);
            fill(0);
            quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
            quad(M[0][0],M[0][1],M[3][0],M[3][1],M[4][0],M[4][1],M[5][0],M[5][1]);
            M = M3D([[x+8,y+40,0],[x+8,y+31,0],[x+15,y+25,0],[x+25,y+25,0],[x+32,y+31,0],[x+32,y+40,0]]);
            fill(80);
            quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
            quad(M[0][0],M[0][1],M[3][0],M[3][1],M[4][0],M[4][1],M[5][0],M[5][1]);
            M = M3D([[x+11,y+40,0],[x+11,y+31,0],[x+16,y+27,0],[x+27,y+27,0],[x+32,y+31,0],[x+32,y+40,0]]);
            fill(0);
            quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
            quad(M[0][0],M[0][1],M[3][0],M[3][1],M[4][0],M[4][1],M[5][0],M[5][1]);
            strokeWeight(1);
            if(block===24){
    M = [[x+30,y+40,0],[x+10,y+40,0]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+10+i*1.1,y+min(fire[0][i],0)/3+40,0];
        M[i+22] = [x+10+i*1.1,y+min(fire[1][i],0)/3+40,0];
        M[i+42] = [x+10+i*1.1,y+min(fire[2][i],0)/3+40,0];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
            }
            break;
        case 25:
            noFill();
            if(neighbor[0]!==25&&opaque[neighbor[0]]<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(221, 247, 252);
                quad3(x,y,0,x+40,y,0,x+40,y,40,x,y,40);
                noStroke();
                fill(221,247,252);
                quad3(x+3,y,37,x+15,y,37,x+5,y,35,x+3,y,25);
                quad3(x+37,y,3,x+25,y,3,x+35,y,5,x+37,y,15);
                noFill();
            }
            if(neighbor[1]!==25&&opaque[neighbor[1]]<3&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(171, 199, 204);
                quad3(x,y,0,x,y+40,0,x,y+40,40,x,y,40);
                noStroke();
                fill(171, 199, 204);
                quad3(x,y+3,37,x,y+3,25,x,y+5,35,x,y+15,37);
                quad3(x,y+37,3,x,y+37,15,x,y+35,5,x,y+25,3);
                noFill();
            }
            if(neighbor[2]!==25&&opaque[neighbor[2]]<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(149, 179, 184);
                quad3(x,y+40,0,x+40,y+40,0,x+40,y+40,40,x,y+40,40);
                fill(149,179,184);
                quad3(x+3,y+40,3,x+15,y+40,3,x+5,y+40,5,x+3,y+40,15);
                quad3(x+37,y+40,37,x+25,y+40,37,x+35,y+40,35,x+37,y+40,25);
                noFill();
                
            }
            if(neighbor[3]!==25&&opaque[neighbor[3]]<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(171, 199, 204);
                quad3(x+40,y,0,x+40,y+40,0,x+40,y+40,40,x+40,y,40);
                noStroke();
                fill(171, 199, 204);
                quad3(x+40,y+3,3,x+40,y+3,15,x+40,y+5,5,x+40,y+15,3);
                quad3(x+40,y+37,37,x+40,y+37,25,x+40,y+35,35,x+40,y+25,37);
                noFill();
            }
            stroke(186, 218, 224);
            quad3(x,y,0,x+40,y,0,x+40,y+40,0,x,y+40,0);
            noStroke();
            fill(186, 218, 224);
            quad3(x+3,y+3,0,x+15,y+3,0,x+5,y+5,0,x+3,y+15,0);
            quad3(x+37,y+37,0,x+25,y+37,0,x+35,y+35,0,x+37,y+25,0);
            break;
        case 26:
            switch(type){
        case 0:
            fill(24, 102, 24);
            quad3(x+18,y+33,22,x+20,y+33,20,x+20,y+40,20,x+18,y+40,22);
            fill(31, 133, 31);
            quad3(x+22,y+33,22,x+20,y+33,20,x+20,y+40,20,x+22,y+40,22);
            fill(186, 47, 47);
            quad3(x+15,y+33,25,x+20,y+33,20,x+20,y+28,20,x+10,y+28,30);
            quad3(x+10,y+28,30,x+20,y+28,20,x+20,y+23,20,x+15,y+23,25);
            fill(100,0,0);
            triangle3(x+20,y+25,20,x+15,y+28,25,x+20,y+30,20);
            fill(217, 78, 78);
            quad3(x+25,y+33,25,x+20,y+33,20,x+20,y+28,20,x+30,y+28,30);
            quad3(x+30,y+28,30,x+20,y+28,20,x+20,y+23,20,x+25,y+23,25);
            fill(150,0,0);
            triangle3(x+20,y+30,20,x+25,y+28,25,x+20,y+25,20);
            fill(31, 133, 31);
            quad3(x+18,y+33,18,x+20,y+33,20,x+20,y+40,20,x+18,y+40,18);
            fill(24, 102, 24);
            quad3(x+22,y+33,18,x+20,y+33,20,x+20,y+40,20,x+22,y+40,18);
            fill(217, 78, 78);
            quad3(x+15,y+33,15,x+20,y+33,20,x+20,y+28,20,x+10,y+28,10);
            quad3(x+10,y+28,10,x+20,y+28,20,x+20,y+23,20,x+15,y+23,15);
            fill(150,0,0);
            triangle3(x+20,y+25,20,x+15,y+28,15,x+20,y+30,20);
            fill(186, 47, 47);
            quad3(x+25,y+33,15,x+20,y+33,20,x+20,y+28,20,x+30,y+28,10);
            quad3(x+30,y+28,10,x+20,y+28,20,x+20,y+23,20,x+25,y+23,15);
            fill(100,0,0);
            triangle3(x+20,y+25,20,x+25,y+28,15,x+20,y+30,20);
            break;
        case 1:
            fill(24, 102, 24);
            quad3(x+18,y+33,22,x+20,y+33,20,x+20,y+40,20,x+18,y+40,22);
            fill(31, 133, 31);
            quad3(x+22,y+33,22,x+20,y+33,20,x+20,y+40,20,x+22,y+40,22);
            fill(219, 199, 88);
            quad3(x+10,y+34,30,x+20,y+33,20,x+20,y+28,20,x+15,y+28,25);
            quad3(x+15,y+28,25,x+20,y+28,20,x+20,y+23,20,x+10,y+22,30);
            fill(133, 117, 24);
            triangle3(x+20,y+25,20,x+18,y+28,22,x+20,y+30,20);
            fill(245, 224, 103);
            quad3(x+30,y+34,30,x+20,y+33,20,x+20,y+28,20,x+25,y+28,25);
            quad3(x+25,y+28,25,x+20,y+28,20,x+20,y+23,20,x+30,y+22,30);
            fill(156, 138, 34);
            triangle3(x+20,y+25,20,x+22,y+28,22,x+20,y+30,20);
            fill(31, 133, 31);
            quad3(x+18,y+33,18,x+20,y+33,20,x+20,y+40,20,x+18,y+40,18);
            fill(24, 102, 24);
            quad3(x+22,y+33,18,x+20,y+33,20,x+20,y+40,20,x+22,y+40,18);
            fill(245, 224, 103);
            quad3(x+10,y+34,10,x+20,y+33,20,x+20,y+28,20,x+15,y+28,15);
            quad3(x+15,y+28,15,x+20,y+28,20,x+20,y+23,20,x+10,y+22,10);
            fill(156, 138, 34);
            triangle3(x+20,y+25,20,x+18,y+28,18,x+20,y+30,20);
            fill(219, 199, 88);
            quad3(x+30,y+34,10,x+20,y+33,20,x+20,y+28,20,x+25,y+28,15);
            quad3(x+25,y+28,15,x+20,y+28,20,x+20,y+23,20,x+30,y+22,10);
            fill(133, 117, 24);
            triangle3(x+20,y+25,20,x+22,y+28,18,x+20,y+30,20);
            }
            break;
        case 27:
            var M1 = [], M2 = [];
            for(var i = 0; i < grass.length; i++){
                M1[i] = [grass[i][0]+x,grass[i][1]+y,40-grass[i][0]];
                M2[i] = [x+grass[i][0],grass[i][1]+y,grass[i][0]];
            }
            M1 = M3D(M1);
            M2 = M3D(M2);
            fill(110, 179, 61);
            beginShape();
            for(var i = 0; i < 11; i++){
                vertex(M1[i][0],M1[i][1]);
            }
            vertex(X3D(x+20,y+40,20),Y3D(x+20,y+40,20));
            endShape();
            fill(121, 196, 71);
            beginShape();
            for(var i = 10; i < 22; i++){
                vertex(M2[i][0],M2[i][1]);
            }
            vertex(X3D(x+20,y+40,20),Y3D(x+20,y+40,20));
            endShape();
            beginShape();
            for(var i = 0; i < 11; i++){
                vertex(M2[i][0],M2[i][1]);
            }
            vertex(X3D(x+20,y+40,20),Y3D(x+20,y+40,20));
            endShape();
            fill(110, 179, 61);
            beginShape();
            for(var i = 10; i < 22; i++){
                vertex(M1[i][0],M1[i][1]);
            }
            vertex(X3D(x+20,y+40,20),Y3D(x+20,y+40,20));
            endShape();
            break;
        case 28:
            fill3(color(176, 138, 49),color(145, 112, 36),color(110, 83, 21),color(89, 66, 16));
            stroke(0);
            box3(x+2.5,y+5,2.5,35,35,35,1,1,1,1);
            if(X3D(x+2.5,y,0)>X3D(x+2.5,y,40)){
                line3(x+2.5,y+16,2.5,x+2.5,y+16,37.5);
            }
            if(X3D(x+37.5,y,0)<X3D(x+37.5,y,40)){
                line3(x+37.5,y+16,2.5,x+37.5,y+16,37.5);
            }
            line3(x+2.5,y+16,2.5,x+37.5,y+16,2.5);
            fill3(color(255),color(220),color(200),color(180));
            noStroke();
            box3(x+17.5,y+13,0,5,10,2.5,1,1,1,1);
            break;
        case 29:
            fill3(color(220),color(190),color(170),color(140));
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            var hide = tag.hideFace;
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            if((!hide||b!==20)&&Y3D(x+a,y+b,0)>Y3D(x+a,y+b,40)){
                fill(0,0,0,40);
                beginShape();
                vertex3(x+a,y+b,0);vertex3(x+c,y+b,0);
                vertex3(x+c,y+b,40);vertex3(x+c-5,y+b,35);
                vertex3(x+c-5,y+b,5);vertex3(x+a+5,y+b,5);
                endShape();
                fill(255,255,255,140);
                beginShape();
                vertex3(x+a,y+b,0);vertex3(x+a,y+b,40);
                vertex3(x+c,y+b,40);vertex3(x+c-5,y+b,35);
                vertex3(x+a+5,y+b,35);vertex3(x+a+5,y+b,5);
                endShape();
            }
            if((!hide||a!==20)&&X3D(x+a,y+b,0)>X3D(x+a,y+b,40)){
                fill(0,0,0,30);
                beginShape();
                vertex3(x+a,y+b,0);vertex3(x+a,y+d,0);
                vertex3(x+a,y+d,40);vertex3(x+a,y+d-5,35);
                vertex3(x+a,y+d-5,5);vertex3(x+a,y+b+5,5);
                endShape();
                fill(255,255,255,100);
                beginShape();
                vertex3(x+a,y+b,0);vertex3(x+a,y+b,40);
                vertex3(x+a,y+d,40);vertex3(x+a,y+d-5,35);
                vertex3(x+a,y+b+5,35);vertex3(x+a,y+b+5,5);
                endShape();
            }
            if((!hide||d!==20)&&Y3D(x+20,y+40,0)<Y3D(x+20,y+40,40)){
                fill(0,0,0,25);
                beginShape();
                vertex3(x+a,y+d,0);vertex3(x+c,y+d,0);
                vertex3(x+c,y+d,40);vertex3(x+c-5,y+d,35);
                vertex3(x+c-5,y+d,5);vertex3(x+a+5,y+d,5);
                endShape();
                beginShape();
                vertex3(x+a,y+d,0);vertex3(x+a,y+d,40);
                vertex3(x+c,y+d,40);vertex3(x+c-5,y+d,35);
                vertex3(x+a+5,y+d,35);vertex3(x+a+5,y+d,5);
                endShape();
            }
            if((!hide||c!==20)&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(0,0,0,30);
                beginShape();
                vertex3(x+c,y+b,0);vertex3(x+c,y+d,0);
                vertex3(x+c,y+d,40);vertex3(x+c,y+d-5,35);
                vertex3(x+c,y+d-5,5);vertex3(x+c,y+b+5,5);
                endShape();
                fill(255,255,255,100);
                beginShape();
                vertex3(x+c,y+b,0);vertex3(x+c,y+b,40);
                vertex3(x+c,y+d,40);vertex3(x+c,y+d-5,35);
                vertex3(x+c,y+b+5,35);vertex3(x+c,y+b+5,5);
                endShape();
            }
            fill(0,0,0,35);
            beginShape();
            vertex3(x+a,y+d,0);vertex3(x+c,y+d,0);
            vertex3(x+c,y+b,0);vertex3(x+c-5,y+b+5,0);
            vertex3(x+c-5,y+d-5,0);vertex3(x+a+5,y+d-5,0);
            endShape();
            fill(255,255,255,120);
            beginShape();
            vertex3(x+a,y+d,0);vertex3(x+a,y+b,0);
            vertex3(x+c,y+b,0);vertex3(x+c-5,y+b+5,0);
            vertex3(x+a+5,y+b+5,0);vertex3(x+a+5,y+d-5,0);
            endShape();
            break;
        case 30:
            fill3(color(180),color(140),color(120),color(80));
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            var hide = tag.hideFace;
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            break;
        case 31:
            drawBlock(30,x-sX,y-sY,neighbor,type,tag);
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            strokeWeight(2);
            noFill();
            var hide = tag.hideFace;
            if(dimensions[0]===20||dimensions[2]===20){
                if((!hide||b!==20)&&Y3D(x+a,y+b,0)>Y3D(x+a,y+b,40)){
                    stroke(120);
                    quad3(x,y+b,20,x+20,y+b,40,x+40,y+b,20,x+20,y+b,0);
                    line3(x,y+b,0,x+40,y+b,40);
                    line3(x,y+b,40,x+40,y+b,0);
                }
                if((!hide||a!==20)&&X3D(x+a,y+b,0)>X3D(x+a,y+b,40)){
                    stroke(80);
                    line3(x,y+d,0,x,y+b,20);
                    line3(x,y+b,20,x,y+d,40);
                    line3(x,y+b,0,x,y+d,20);
                    line3(x,y+d,20,x,y+b,40);
                }
                if((!hide||d!==20)&&Y3D(x+a,y+d,0)<Y3D(x+a,y+d,40)){
                    stroke(60);
                    quad3(x,y+d,20,x+20,y+d,40,x+40,y+d,20,x+20,y+d,0);
                    line3(x,y+d,0,x+40,y+d,40);
                    line3(x,y+d,40,x+40,y+d,0);
                }
                if((!hide||c!==20)&&X3D(x+c,y+b,0)<X3D(x+c,y+b,40)){
                    stroke(80);
                    line3(x+40,y+d,0,x+40,y+b,20);
                    line3(x+40,y+b,20,x+40,y+d,40);
                    line3(x+40,y+b,0,x+40,y+d,20);
                    line3(x+40,y+d,20,x+40,y+b,40);
                }
                stroke(90);
                line3(x,y+b,0,x+20,y+d,0);
                line3(x+20,y+d,0,x+40,y+b,0);
                line3(x,y+d,0,x+20,y+b,0);
                line3(x+20,y+b,0,x+40,y+d,0);
            }else{
                if((!hide||b!==20)&&Y3D(x+a,y+b,0)>Y3D(x+a,y+b,40)){
                    stroke(120);
                    line3(x+a,y,0,x+c,y,20);
                    line3(x+c,y,20,x+a,y,40);
                    line3(x+c,y,0,x+a,y,20);
                    line3(x+a,y,20,x+c,y,40);
                }
                if((!hide||a!==20)&&X3D(x+a,y+b,0)>X3D(x+a,y+b,40)){
                    stroke(80);
                    quad3(x+a,y,20,x+a,y+20,0,x+a,y+40,20,x+a,y+20,40);
                    line3(x+a,y,0,x+a,y+40,40);
                    line3(x+a,y+40,0,x+a,y,40);
                }
                if((!hide||d!==20)&&Y3D(x+a,y+d,0)<Y3D(x+a,y+d,40)){
                    stroke(60);
                    line3(x+a,y+40,0,x+c,y+40,20);
                    line3(x+c,y+40,20,x+a,y+40,40);
                    line3(x+c,y+40,0,x+a,y+40,20);
                    line3(x+a,y+40,20,x+c,y+40,40);
                }
                if((!hide||c!==20)&&X3D(x+c,y+b,0)<X3D(x+c,y+b,40)){
                    stroke(80);
                    quad3(x+c,y,20,x+c,y+20,0,x+c,y+40,20,x+c,y+20,40);
                    line3(x+c,y,0,x+c,y+40,40);
                    line3(x+c,y+40,0,x+c,y,40);
                }
                stroke(90);
                line3(x+a,y,0,x+c,y+20,0);
                line3(x+c,y+20,0,x+a,y+40,0);
                line3(x+c,y,0,x+a,y+20,0);
                line3(x+a,y+20,0,x+c,y+40,0);
            }
            noStroke();
            break;
        case 32:
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            var st = [];
            switch(type){
                case 0:
                    fill3(color(207,179,136),color(168,138,94),color(117,96,64),color(94,77,53));
                    st[0] = color(122, 95, 61);
                    st[1] = color(92, 66, 34);
                    st[2] = color(69, 48, 21);
                    st[3] = color(77, 60, 37);
                    break;
                case 1:
                    fill3(color(158, 128, 107),color(130, 99, 76),color(102, 74, 54),color(74, 52, 36));
                    st[0] = color(82, 61, 35);
                    st[1] = color(61, 42, 18);
                    st[2] = color(33, 22, 9);
                    st[3] = color(66, 47, 21);
                    break;
                case 2:
                    fill3(color(230, 216, 200),color(194, 175, 153),color(168, 144, 116),color(156, 128, 98));
                    st[0] = color(171, 143, 109);
                    st[1] = color(143, 106, 62);
                    st[2] = color(122, 97, 69);
                    st[3] = color(112, 92, 66);
            }
            var hide = tag.hideFace;
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            if((!hide||b!==20)&&Y3D(x,y,0)>Y3D(x,y,40)){
                stroke(st[0]);
                line3(x+a,y+b,10,x+c,y+b,10);
                line3(x+a,y+b,20,x+c,y+b,20);
                line3(x+a,y+b,30,x+c,y+b,30);
                line3(x+a,y+b,40,x+c,y+b,40);
                noStroke();
            }
            if((!hide||a!==20)&&X3D(x,y,0)>X3D(x,y,40)){
                stroke(st[1]);
                line3(x+a,y+10+b,0,x+a,y+10+b,40);
                line3(x+a,y+20+b,0,x+a,y+20+b,40);
                if(d-b===40){
                    line3(x+a,y+30,0,x+a,y+30,40);
                    line3(x+a,y+40,0,x+a,y+40,40);
                }
                noStroke();
            }
            if((!hide||d!==20)&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                stroke(st[2]);
                line3(x+a,y+d,10,x+c,y+d,10);
                line3(x+a,y+d,20,x+c,y+d,20);
                line3(x+a,y+d,30,x+c,y+d,30);
                line3(x+a,y+d,40,x+c,y+d,40);
                noStroke();
            }
            if((!hide||c!==20)&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                stroke(st[1]);
                line3(x+c,y+10+b,0,x+c,y+10+b,40);
                line3(x+c,y+20+b,0,x+c,y+20+b,40);
                if(d-b===40){
                    line3(x+c,y+30,0,x+c,y+30,40);
                    line3(x+c,y+40,0,x+c,y+40,40);
                }
                noStroke();
            }
            stroke(st[3]);
            line3(x+a,y+b+10,0,x+c,y+b+10,0);
            line3(x+a,y+b+20,0,x+c,y+b+20,0);
            if(d-b===40){
                line3(x+a,y+30,0,x+c,y+30,0);
                line3(x+a,y+40,0,x+c,y+40,0);
            }
            noStroke();
            break;
        case 33:
            var hide = tag.hideFace;
            fill3(color(255,90,90),color(255,0,0),color(200,0,0),color(160,0,0));
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            break;
        case 34:
            var hide = tag.hideFace;
            fill3(color(120,255,120),color(0,255,0),color(0,200,0),color(0,160,0));
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            break;
        case 35:
            var hide = tag.hideFace;
            fill3(color(60,60,255),color(0,0,255),color(0,0,200),color(0,0,160));
            var dimensions = dimen(block,tag);
            if(!tag.orientation){dimensions = [20,0,0,40];}
            var a = dimensions[1],
            b = 40-dimensions[0],
            c = dimensions[3],
            d = 40-dimensions[2];
            box3(x+a,y+b,0,c-a,d-b,40,!hide||b!==20,!hide||a!==20,!hide||d!==20,!hide||c!==20);
            break;
        case 36:
            if(tag.horizontal){
                drawBlock(tag.a,x-sX,y-sY,[1,1,1,1],tag.at,{orientation:1,hideFace:true});
                drawBlock(tag.b,x-sX,y-sY,[1,1,1,1],tag.bt,{orientation:3,hideFace:true});
            }else{
                drawBlock(tag.a,x-sX,y-sY,[1,1,1,1],tag.at,{orientation:0,hideFace:true});
                drawBlock(tag.b,x-sX,y-sY,[1,1,1,1],tag.bt,{orientation:2,hideFace:true});
            }
            break;
        case 37:case 38:case 39:case 40:
            var c = [];
            switch(block){
                case 37:
                    fill3(color(220),color(190),color(170),color(140));
                    break;
                case 38:
                    fill3(color(235),color(210),color(190),color(160));
                    break;
                case 39:
                    fill3(color(255, 241, 184),color(255, 204, 0),color(217, 174, 0),color(158, 116, 0));
                    break;
                case 40:
                    fill3(color(189, 245, 255),color(92, 228, 255),color(46, 185, 209),color(0, 144, 173));
                    break;
            }
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                fill(0,0,0,40);
                beginShape();
                vertex3(x,y,0);vertex3(x+40,y,0);
                vertex3(x+40,y,40);vertex3(x+35,y,35);
                vertex3(x+35,y,5);vertex3(x+5,y,5);
                endShape();
                fill(255,255,255,140);
                beginShape();
                vertex3(x,y,0);vertex3(x,y,40);
                vertex3(x+40,y,40);vertex3(x+35,y,35);
                vertex3(x+5,y,35);vertex3(x+5,y,5);
                endShape();
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                fill(0,0,0,30);
                beginShape();
                vertex3(x,y,0);vertex3(x,y+40,0);
                vertex3(x,y+40,40);vertex3(x,y+35,35);
                vertex3(x,y+35,5);vertex3(x,y+5,5);
                endShape();
                fill(255,255,255,100);
                beginShape();
                vertex3(x,y,0);vertex3(x,y,40);
                vertex3(x,y+40,40);vertex3(x,y+35,35);
                vertex3(x,y+5,35);vertex3(x,y+5,5);
                endShape();
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                fill(0,0,0,25);
                beginShape();
                vertex3(x,y+40,0);vertex3(x+40,y+40,0);
                vertex3(x+40,y+40,40);vertex3(x+35,y+40,35);
                vertex3(x+35,y+40,5);vertex3(x+5,y+40,5);
                endShape();
                beginShape();
                vertex3(x,y+40,0);vertex3(x,y+40,40);
                vertex3(x+40,y+40,40);vertex3(x+35,y+d,35);
                vertex3(x+5,y+40,35);vertex3(x+5,y+35,5);
                endShape();
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                fill(0,0,0,30);
                beginShape();
                vertex3(x+40,y,0);vertex3(x+40,y+40,0);
                vertex3(x+40,y+40,40);vertex3(x+40,y+35,35);
                vertex3(x+40,y+35,5);vertex3(x+40,y+35,5);
                endShape();
                fill(255,255,255,100);
                beginShape();
                vertex3(x+40,y,0);vertex3(x+40,y,40);
                vertex3(x+40,y+40,40);vertex3(x+40,y+35,35);
                vertex3(x+40,y+5,35);vertex3(x+40,y+5,5);
                endShape();
            }
            fill(0,0,0,35);
            beginShape();
            vertex3(x,y+40,0);vertex3(x+40,y+40,0);
            vertex3(x+40,y,0);vertex3(x+35,y+5,0);
            vertex3(x+35,y+35,0);vertex3(x+5,y+35,0);
            endShape();
            fill(255,255,255,120);
            beginShape();
            vertex3(x,y+40,0);vertex3(x,y,0);
            vertex3(x+40,y,0);vertex3(x+35,y+5,0);
            vertex3(x+5,y+5,0);vertex3(x+5,y+35,0);
            endShape();
            break;
        case 41:
            fill(194, 156, 119);
            quad3(x+10,y,40,x+10,y+40,40,x+5,y+40,40,x+5,y,40);
            quad3(x+30,y,40,x+30,y+40,40,x+35,y+40,40,x+35,y,40);
            fill(150, 104, 57);
            quad3(x+10,y,40,x+10,y+40,40,x+7,y+40,40,x+7,y,40);
            quad3(x+32,y,40,x+32,y+40,40,x+35,y+40,40,x+35,y,40);
            fill(194, 156, 119);
            quad3(x,y+2,40,x+40,y+2,40,x+40,y+8,40,x,y+8,40);
            quad3(x,y+12,40,x+40,y+12,40,x+40,y+18,40,x,y+18,40);
            quad3(x,y+22,40,x+40,y+22,40,x+40,y+28,40,x,y+28,40);
            quad3(x,y+32,40,x+40,y+32,40,x+40,y+38,40,x,y+38,40);
            fill(150, 104, 57);
            quad3(x+40,y+2,40,x+40,y+8,40,x,y+8,40,x+37,y+5,40);
            quad3(x+40,y+12,40,x+40,y+18,40,x,y+18,40,x+37,y+15,40);
            quad3(x+40,y+22,40,x+40,y+28,40,x,y+28,40,x+37,y+25,40);
            quad3(x+40,y+32,40,x+40,y+38,40,x,y+38,40,x+37,y+35,40);
            break;
        case 42:
            if(tag.open){
                switch(type){
                case 0:
                    if(tag.top){
                        fill3(color(207,179,136),color(168,138,94,0),color(117,96,64),color(94,77,53));
                        box3(x,y,30,40,40,10,1,1,0,1);
                        fill(168,138,94);
                        quad3(x,y,30,x+40,y,30,x+40,y+5,30,x,y+5,30);
                        quad3(x,y+5,30,x+5,y+5,30,x+5,y+40,30,x,y+40,30);
                        quad3(x+35,y+5,30,x+40,y+5,30,x+40,y+40,30,x+35,y+40,30);
                        quad3(x+5,y+33,30,x+35,y+33,30,x+35,y+40,30,x+5,y+40,30);
                        fill(135, 112, 77);
                        quad3(x+40,y,30,x+40,y+40,30,x+37,y+40,30,x+37,y+3,30);
                        beginShape();
                        vertex3(x+5,y+33,30);vertex3(x+5,y+40,30);
                        vertex3(x+7,y+40,30);vertex3(x+7,y+35,30);
                        vertex3(x+18,y+35,30);vertex3(x+20,y+33,30);
                        endShape();
                        beginShape();
                    vertex3(x+20,y+33,30);vertex3(x+20,y+40,30);
                    vertex3(x+22,y+40,30);vertex3(x+22,y+35,30);
                    vertex3(x+33,y+35,30);vertex3(x+35,y+33,30);
                        endShape();
                        fill(199,170,126);
                        quad3(x+20,y+33,30,x+20,y+40,30,x+18,y+40,30,x+18,y+35,30);
                        quad3(x+35,y+33,30,x+35,y+40,30,x+33,y+40,30,x+33,y+35,30);
                        beginShape();
                        vertex3(x+40,y,30);vertex3(x+37,y+3,30);
                        vertex3(x+3,y+3,30);vertex3(x+3,y+40,30);
                        vertex3(x,y+40,30);vertex3(x,y,30);
                        endShape();
                        for(var i = 0; i < 4; i++){
                            var xx = 5+x+floor(i/2)*15;
                            var yy = 5+y+(i%2)*14;
                            fill(135, 112, 77);
                            beginShape();
                    vertex3(xx,yy,30);vertex3(xx,yy+14,30);
                    vertex3(xx+2,yy+12,30);vertex3(xx+2,yy+2,30);
                    vertex3(xx+13,yy+2,30);vertex3(xx+15,yy,30);
                            endShape();
                            fill(199, 170, 126);
                            beginShape();
                    vertex3(xx+15,yy+14,30);vertex3(xx,yy+14,30);
                    vertex3(xx+2,yy+12,30);vertex3(xx+13,yy+12,30);
                    vertex3(xx+13,yy+2,30);vertex3(xx+15,yy,30);
                            endShape();
                        }
                        fill(60);
                        if(tag.align===RIGHT){
                            quad3(x+5,y+35,30,x+13,y+35,30,x+13,y+38,30,x+5,y+38,30);
                            quad3(x+13,y+38,30,x+10,y+38,30,x+10,y+40,30,x+13,y+40,30);
                        }else{
                            quad3(x+35,y+35,30,x+27,y+35,30,x+27,y+38,30,x+35,y+38,30);
                            quad3(x+27,y+38,30,x+30,y+38,30,x+30,y+40,30,x+27,y+40,30);
                        }
                    }else{
                        fill3(color(207,179,136),color(168,138,94),color(117,96,64),color(94,77,53));
                        box3(x,y,30,40,40,10,0,1,1,1);
                        fill(135,112,77);
                        quad3(x+5,y,30,x+5,y+7,30,x+7,y+5,30,x+7,y,30);
                        quad3(x+20,y,30,x+20,y+7,30,x+22,y+5,30,x+22,y,30);
                        beginShape();
                    vertex3(x+40,y,30);vertex3(x+40,y+40,30);
                    vertex3(x,y+40,30);vertex3(x+3,y+37,30);
                    vertex3(x+37,y+37,30);vertex3(x+37,y,30);
                        endShape();
                        fill(199, 170, 126);
                        quad3(x,y,30,x,y+40,30,x+3,y+37,30,x+3,y,30);
                        beginShape();
                    vertex3(x+20,y,30);vertex3(x+20,y+7,30);
                    vertex3(x+5,y+7,30);vertex3(x+7,y+5,30);
                    vertex3(x+18,y+5,30);vertex3(x+18,y,30);
                        endShape();
                        beginShape();
                    vertex3(x+35,y,30);vertex3(x+35,y+7,30);
                    vertex3(x+20,y+7,30);vertex3(x+22,y+5,30);
                    vertex3(x+33,y+5,30);vertex3(x+33,y,30);
                        endShape();
                        for(var i = 0; i < 4; i++){
                            var xx = 5+x+floor(i/2)*15;
                            var yy = 7+y+(i%2)*14;
                            fill(135, 112, 77);
                            beginShape();
                    vertex3(xx,yy,30);vertex3(xx,yy+14,30);
                    vertex3(xx+2,yy+12,30);vertex3(xx+2,yy+2,30);
                    vertex3(xx+13,yy+2,30);vertex3(xx+15,yy,30);
                            endShape();
                            fill(199, 170, 126);
                            beginShape();
                    vertex3(xx+15,yy+14,30);vertex3(xx,yy+14,30);
                    vertex3(xx+2,yy+12,30);vertex3(xx+13,yy+12,30);
                    vertex3(xx+13,yy+2,30);vertex3(xx+15,yy,30);
                            endShape();
                        }
                    }
                    break;
                case 1:
                    fill3(color(158, 128, 107),color(130, 99, 76),color(102, 74, 54),color(74, 52, 36));
                    box3(x,y,30,40,40,10,1,1,1,1);
                    for(var i = 0; i < 5; i++){
                        fill(99, 71, 52);
                        quad3(x+i*8+6,y,30,x+i*8+6,y+40,30,x+i*8+8,y+40,30,x+i*8+8,y,30);
                    }
                if(!tag.top){
                    fill(180);
                    if(tag.align===RIGHT){
                        quad3(x+6,y,30,x+12,y,30,x+12,y+10,30,x+6,y+10,30);
                        quad3(x+4,y+2,30,x+14,y+2,30,x+14,y+8,30,x+4,y+8,30);
                        fill(130, 99, 76);
                        quad3(x+6,y+2,30,x+12,y+2,30,x+12,y+8,30,x+6,y+8,30);
                    }else{
                        quad3(x+34,y,30,x+28,y,30,x+28,y+10,30,x+34,y+10,30);
                        quad3(x+36,y+2,30,x+26,y+2,30,x+26,y+8,30,x+36,y+8,30);
                        fill(130, 99, 76);
                        quad3(x+34,y+2,30,x+28,y+2,30,x+28,y+8,30,x+34,y+8,30);
                    }
                }
                    break;
                case 2:
                    fill3(color(230, 216, 200),color(194, 175, 153),color(168, 144, 116),color(156, 128, 98));
                    box3(x,y,30,40,40,10,1,1,1,1);
                    if(tag.top){
                        fill(168, 144, 116);
                        quad3(x+35,y+5,30,x+35,y+40,30,x+32,y+40,30,x+32,y+8,30);
                        fill(230, 216, 200);
                        beginShape();
                        vertex3(x+35,y+5,30);vertex3(x+32,y+8,30);
                        vertex3(x+8,y+8,30);vertex3(x+8,y+40,30);
                        vertex3(x+5,y+40,30);vertex3(x+5,y+5,30);
                        endShape();
                        fill(245, 236, 226);
                        quad3(x+8,y+8,30,x+8,y+40,30,x+32,y+40,30,x+32,y+8,30);
                    }else{
                        fill(168, 144, 116);
                        beginShape();
                    vertex3(x+35,y,30);vertex3(x+35,y+10,30);
                    vertex3(x+5,y+10,30);vertex3(x+8,y+7,30);
                    vertex3(x+32,y+7,30);vertex3(x+32,y,30);
                        endShape();
                        fill(230, 216, 200);
                        quad3(x+5,y,30,x+5,y+10,30,x+8,y+7,30,x+8,y,30);
                        fill(245, 236, 226);
                        quad3(x+8,y,30,x+8,y+7,30,x+32,y+7,30,x+32,y,30);
                    }
                    fill(50);
                if(tag.top){
                    if(tag.align===RIGHT){
                        quad3(x,y+35,30,x+4,y+35,30,x+4,y+40,30,x,y+40,30);
                    }else{
                        quad3(x+40,y+35,30,x+36,y+35,30,x+36,y+40,30,x+40,y+40,30);
                    }
                }
                }
            }else{
                x += dimen(42,tag)[1];
            switch(type){
                case 0:
                    if(tag.top){
                        fill3(color(207,179,136),color(168,138,94),color(117,96,64,0),color(94,77,53));
                        box3(x,y,0,10,40,40,1,1,0,1);
                    }else{
                        fill3(color(207,179,136),color(168,138,94),color(117,96,64),color(94,77,53));
                        box3(x,y,0,10,40,40,0,1,1,1);
                    }
                    break;
                case 1:
                    fill3(color(158, 128, 107),color(130, 99, 76),color(102, 74, 54),color(74, 52, 36));
                    box3(x,y,0,10,40,40,1,1,1,1);
                    break;
                case 2:
                    fill3(color(230, 216, 200),color(194, 175, 153),color(168, 144, 116),color(156, 128, 98));
                    box3(x,y,0,10,40,40,1,1,1,1);
            }
            for(var a = x; a <= x+10; a+=10){
                switch(type){
                case 0:
                    if(tag.top){
                    if((a===x&&X3D(a,y,0)>X3D(a,y,40))||(a!==x&&X3D(a,y,0)<X3D(a,y,40))){
                        fill(117,96,64);
                        quad3(a,y,0,a,y,40,a,y+5,40,a,y+5,0);
                        quad3(a,y+5,0,a,y+5,5,a,y+40,5,a,y+40,0);
                        quad3(a,y+5,35,a,y+5,40,a,y+40,40,a,y+40,35);
                        quad3(a,y+33,5,a,y+33,35,a,y+40,35,a,y+40,5);
                        fill(102, 83, 55);
                        quad3(a,y,0,a,y+40,0,a,y+40,3,a,y+3,3);
                        beginShape();
                        vertex3(a,y+33,35);vertex3(a,y+40,35);
                        vertex3(a,y+40,33);vertex3(a,y+35,33);
                        vertex3(a,y+35,22);vertex3(a,y+33,20);
                        endShape();
                        beginShape();
                    vertex3(a,y+33,20);vertex3(a,y+40,20);
                    vertex3(a,y+40,18);vertex3(a,y+35,18);
                    vertex3(a,y+35,7);vertex3(a,y+33,5);
                        endShape();
                        fill(150, 125, 88);
                        quad3(a,y+33,20,a,y+40,20,a,y+40,22,a,y+35,22);
                        quad3(a,y+33,5,a,y+40,5,a,y+40,7,a,y+35,7);
                        beginShape();
                        vertex3(a,y,0);vertex3(a,y+3,3);
                        vertex3(a,y+3,37);vertex3(a,y+40,37);
                        vertex3(a,y+40,40);vertex3(a,y,40);
                        endShape();
                        for(var i = 0; i < 4; i++){
                            var xx = 35-floor(i/2)*15;
                            var yy = 5+y+(i%2)*14;
                            fill(102, 83, 55);
                            beginShape();
                    vertex3(a,yy,xx);vertex3(a,yy+14,xx);
                    vertex3(a,yy+12,xx-2);vertex3(a,yy+2,xx-2);
                    vertex3(a,yy+2,xx-13);vertex3(a,yy,xx-15);
                            endShape();
                            fill(150, 125, 88);
                            beginShape();
                    vertex3(a,yy+14,xx-15);vertex3(a,yy+14,xx);
                    vertex3(a,yy+12,xx-2);vertex3(a,yy+12,xx-13);
                    vertex3(a,yy+2,xx-13);vertex3(a,yy,xx-15);
                            endShape();
                        }
                        fill(60);
                        quad3(a,y+35,5,a,y+35,13,a,y+38,13,a,y+38,5);
                        quad3(a,y+38,13,a,y+38,10,a,y+40,10,a,y+40,13);
                    }
                    }else{
                    if((a===x&&X3D(a,y,0)>X3D(a,y,40))||(a!==x&&X3D(a,y,0)<X3D(a,y,40))){
                        fill(102, 83, 55);
                        quad3(a,y,35,a,y+7,35,a,y+5,33,a,y,33);
                        quad3(a,y,20,a,y+7,20,a,y+5,18,a,y,18);
                        beginShape();
                    vertex3(a,y,0);vertex3(a,y+40,0);
                    vertex3(a,y+40,40);vertex3(a,y+37,37);
                    vertex3(a,y+37,3);vertex3(a,y,3);
                        endShape();
                        fill(150, 125, 88);
                        quad3(a,y,40,a,y+40,40,a,y+37,37,a,y,37);
                        beginShape();
                    vertex3(a,y,20);vertex3(a,y+7,20);
                    vertex3(a,y+7,35);vertex3(a,y+5,33);
                    vertex3(a,y+5,22);vertex3(a,y,22);
                        endShape();
                        beginShape();
                    vertex3(a,y,5);vertex3(a,y+7,5);
                    vertex3(a,y+7,20);vertex3(a,y+5,18);
                    vertex3(a,y+5,7);vertex3(a,y,7);
                        endShape();
                        for(var i = 0; i < 4; i++){
                            var xx = 35-floor(i/2)*15;
                            var yy = 7+y+(i%2)*14;
                            fill(102, 83, 55);
                            beginShape();
                    vertex3(a,yy,xx);vertex3(a,yy+14,xx);
                    vertex3(a,yy+12,xx-2);vertex3(a,yy+2,xx-2);
                    vertex3(a,yy+2,xx-13);vertex3(a,yy,xx-15);
                            endShape();
                            fill(150, 125, 88);
                            beginShape();
                    vertex3(a,yy+14,xx-15);vertex3(a,yy+14,xx);
                    vertex3(a,yy+12,xx-2);vertex3(a,yy+12,xx-13);
                    vertex3(a,yy+2,xx-13);vertex3(a,yy,xx-15);
                            endShape();
                        }
                    }
                    }
                    break;
                case 1:
                if((a===x&&X3D(a,y,0)>X3D(a,y,40))||(a!==x&&X3D(a,y,0)<X3D(a,y,40))){
                    for(var i = 0; i < 5; i++){
                        fill(82, 57, 41);
                        quad3(a,y,i*8+2,a,y+40,i*8+2,a,y+40,i*8,a,y,i*8);
                    }
                if(!tag.top){
                    fill(180);
                    quad3(a,y,6,a,y,12,a,y+10,12,a,y+10,6);
                    quad3(a,y+2,4,a,y+2,14,a,y+8,14,a,y+8,4);
                    fill(102, 74, 54);
                    quad3(a,y+2,6,a,y+2,12,a,y+8,12,a,y+8,6);
                }}
                    break;
                case 2:
                if((a===x&&X3D(a,y,0)>X3D(a,y,40))||(a!==x&&X3D(a,y,0)<X3D(a,y,40))){
                    if(tag.top){
                        fill(135, 114, 89);
                        quad3(a,y+5,5,a,y+40,5,a,y+40,8,a,y+8,8);
                        fill(189, 164, 136);
                        beginShape();
                        vertex3(a,y+5,5);vertex3(a,y+8,8);
                        vertex3(a,y+8,32);vertex3(a,y+40,32);
                        vertex3(a,y+40,35);vertex3(a,y+5,35);
                        endShape();
                        fill(222, 209, 195);
                        quad3(a,y+8,32,a,y+40,32,a,y+40,8,a,y+8,8);
                        fill(50);
                        quad3(a,y+35,0,a,y+35,4,a,y+40,4,a,y+40,0);
                    }else{
                        fill(135, 114, 89);
                        beginShape();
                    vertex3(a,y,5);vertex3(a,y+10,5);
                    vertex3(a,y+10,35);vertex3(a,y+7,32);
                    vertex3(a,y+7,8);vertex3(a,y,8);
                        endShape();
                        fill(189, 164, 136);
                        quad3(a,y,35,a,y+10,35,a,y+7,32,a,y,32);
                        fill(222, 209, 195);
                        quad3(a,y,32,a,y+7,32,a,y+7,8,a,y,8);
                    }
                    fill(50);
                }}}
            }
            break;
        case 43:
            fill(141, 0, 217,100);
            quad3(x,y,15,x+40,y,15,x+40,y+40,15,x,y+40,15);
            var M = [];
            for(var i = 0; i < 20; i++){
                var a = i*36-frameCount*3;
                M[i] = [x+20+i*cos(a),y+20+i*sin(a),15];
            }
            M = M3D(M);
            strokeWeight(3);
            for(var i = 0; i < M.length-1; i++){
                stroke(0,0,0,50-i*2);
                line(M[i][0]+1,M[i][1]+1,M[i+1][0]+1,M[i+1][1]+1);
                stroke(255,255,255,50-i*2);
                line(M[i][0]-1,M[i][1]-1,M[i+1][0]-1,M[i+1][1]-1);
            }
            strokeWeight(1);
            noStroke();
            break;
        case 44:
            fill3(color(153, 28, 44),color(117, 2, 16),color(79, 0, 11),color(56, 0, 7));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            break;
        case 45:
            fill3(color(107, 67, 47),color(84, 48, 30),color(74, 42, 26),color(66, 31, 14));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
        if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
            fill(133, 92, 77);
            quad3(x+7,y,35,x+23,y,35,x+23,y,20,x+7,y,20);
            quad3(x+28,y,26,x+40,y,24,x+38,y,4,x+26,y,6);
            beginShape();
            vertex3(x,y,5);vertex3(x,y,0);
            vertex3(x+10,y,0);vertex3(x+17,y,6);
            vertex3(x+10,y,15);
            endShape();
            triangle3(x,y,40,x,y,33,x+10,y,40);
            triangle3(x+40,y,5,x+40,y,0,x+35,y,0);
            beginShape();
            vertex3(x+40,y,33);
            vertex3(x+40,y,40);vertex3(x+35,y,40);
            vertex3(x+29,y,35);vertex3(x+35,y,30);
            endShape();
            /*strokeWeight(3);
            stroke(107, 67, 47);
            point3(x+10,y,31);
            point3(x+20,y,31);
            point3(x+30,y,20);
            point3(x+35,y,18);
            strokeWeight(2);
            line3(x+32,y,36,x+34,y,37);
            line3(x+36,y,33,x+38,y,34);
            noStroke();
            fill(107,67,47);
            quad3(x+15,y,29,x+12,y,25,x+15,y,20,x+19,y,25);
            quad3(x+35,y,15,x+35,y,10,x+28,y,7,x+30,y,12);
            quad3(x+15,y,10,x+15,y,5,x,y,0,x+8,y,7);
            */
            }
        if(left<3&&X3D(x,y,0)>X3D(x,y,40)){fill(112, 69, 47);
            fill(102, 62, 43);
            quad3(x,y+5,33,x,y+5,17,x,y+20,17,x,y+20,33);
            quad3(x,y+14,12,x,y+16,0,x,y+36,2,x,y+34,14);
            beginShape();
            vertex3(x,y+35,40);vertex3(x,y+40,40);
            vertex3(x,y+40,30);vertex3(x,y+34,23);
            vertex3(x,y+25,30);
            endShape();
            triangle3(x,y,40,x,y+7,40,x,y,30);
            triangle3(x,y+35,0,x,y+40,0,x,y+40,5);
            beginShape();
            vertex3(x,y+7,0);
            vertex3(x,y,0);vertex3(x,y,5);
            vertex3(x,y+5,11);vertex3(x,y+10,5);
            endShape();
            }
        if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
            fill(87, 47, 30);
            quad3(x+7,y+40,5,x+23,y+40,5,x+23,y+40,20,x+7,y+40,20);
            quad3(x+28,y+40,14,x+40,y+40,16,x+38,y+40,36,x+26,y+40,34);
            beginShape();
            vertex3(x,y+40,35);vertex3(x,y+40,40);
            vertex3(x+10,y+40,40);vertex3(x+17,y+40,34);
            vertex3(x+10,y+40,25);
            endShape();
            triangle3(x,y+40,0,x,y+40,7,x+10,y+40,0);
            triangle3(x+40,y+40,35,x+40,y+40,40,x+35,y+40,40);
            beginShape();
            vertex3(x+40,y+40,7);
            vertex3(x+40,y+40,0);vertex3(x+35,y+40,0);
            vertex3(x+29,y+40,5);vertex3(x+35,y+40,10);
            endShape();
            }
        if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
            fill(102, 62, 43);
            quad3(x+40,y+5,7,x+40,y+5,23,x+40,y+20,23,x+40,y+20,7);
            quad3(x+40,y+14,28,x+40,y+16,40,x+40,y+36,38,x+40,y+34,26);
            beginShape();
            vertex3(x+40,y+35,0);vertex3(x+40,y+40,0);
            vertex3(x+40,y+40,10);vertex3(x+40,y+34,17);
            vertex3(x+40,y+25,10);
            endShape();
            triangle3(x+40,y,0,x+40,y+7,0,x+40,y,10);
            triangle3(x+40,y+35,40,x+40,y+40,40,x+40,y+40,35);
            beginShape();
            vertex3(x+40,y+7,40);
            vertex3(x+40,y,40);vertex3(x+40,y,35);
            vertex3(x+40,y+5,29);vertex3(x+40,y+10,35);
            endShape();
        }
            fill(112, 69, 47);
            quad3(x+7,y+5,0,x+23,y+5,0,x+23,y+20,0,x+7,y+20,0);
            quad3(x+28,y+14,0,x+40,y+16,0,x+38,y+36,0,x+26,y+34,0);
            beginShape();
            vertex3(x,y+35,0);vertex3(x,y+40,0);
            vertex3(x+10,y+40,0);vertex3(x+17,y+34,0);
            vertex3(x+10,y+25,0);
            endShape();
            triangle3(x,y,0,x,y+7,0,x+10,y,0);
            triangle3(x+40,y+35,0,x+40,y+40,0,x+35,y+40,0);
            beginShape();
            vertex3(x+40,y+7,0);
            vertex3(x+40,y,0);vertex3(x+35,y,0);
            vertex3(x+29,y+5,0);vertex3(x+35,y+10,0);
            endShape();
            /*strokeWeight(3);
            stroke(84, 48, 30);
            point3(x+10,y+9,0);
            point3(x+20,y+9,0);
            point3(x+30,y+20,0);
            point3(x+35,y+22,0);
            strokeWeight(2);
            line3(x+32,y+4,0,x+34,y+3,0);
            line3(x+36,y+7,0,x+38,y+6,0);
            noStroke();
            fill(84, 48, 30);
            quad3(x+15,y+11,0,x+12,y+15,0,x+15,y+20,0,x+19,y+15,0);
            quad3(x+35,y+25,0,x+35,y+30,0,x+28,y+33,0,x+30,y+28,0);
            quad3(x+15,y+30,0,x+15,y+35,0,x,y+40,0,x+8,y+33,0);
            */
            break;
        case 46:
            fill3(color(255, 245, 219),color(255, 227, 150),color(255, 216, 117),color(255, 207, 87));
            box3(x,y,0,40,40,40,up<3,left<3,down<3,right<3);
            strokeWeight(2);
            noFill();
            stroke(0,0,0,30);
            if(up<3&&Y3D(x,y,0)>Y3D(x,y,40)){
                quad3(x+20,y,0,x,y,20,x+20,y,40,x+40,y,20);
                line3(x,y,0,x+40,y,40);
                line3(x+40,y,0,x,y,40);
            }
            if(left<3&&X3D(x,y,0)>X3D(x,y,40)){
                quad3(x,y+20,0,x,y,20,x,y+20,40,x,y+40,20);
                line3(x,y,0,x,y+40,40);
                line3(x,y+40,0,x,y,40);
            }
            if(down<3&&Y3D(x,y+40,0)<Y3D(x,y+40,40)){
                quad3(x+20,y+40,0,x,y+40,20,x+20,y+40,40,x+40,y+40,20);
                line3(x,y+40,0,x+40,y+40,40);
                line3(x+40,y+40,0,x,y+40,40);
            }
            if(right<3&&X3D(x+40,y,0)<X3D(x+40,y,40)){
                quad3(x+40,y+20,0,x+40,y,20,x+40,y+20,40,x+40,y+40,20);
                line3(x+40,y,0,x+40,y+40,40);
                line3(x+40,y+40,0,x+40,y,40);
            }
            quad3(x+20,y,0,x,y+20,0,x+20,y+40,0,x+40,y+20,0);
            line3(x,y,0,x+40,y+40,0);
            line3(x+40,y,0,x,y+40,0);
            noStroke();
            strokeWeight(1);
            break;
        case 47://color(255, 91, 54),color(171, 141, 93)
            switch(type){
                case 0:
            fill(184, 148, 107);
            quad3(x+18,y+25,22,x+20,y+25,20,x+20,y+40,20,x+18,y+40,22);
            fill(199, 165, 130);
            quad3(x+22,y+25,22,x+20,y+25,20,x+20,y+40,20,x+22,y+40,22);
            fill(207, 51, 20);
            quad3(x+5,y+25,35,x+20,y+25,20,x+20,y+10,20,x+5,y+10,35);
            quad3(x+5,y+10,35,x+20,y+10,20,x+20,y,20,x+13,y,27);
            fill(255, 91, 54);
            quad3(x+35,y+25,35,x+20,y+25,20,x+20,y+10,20,x+35,y+10,35);
            quad3(x+35,y+10,35,x+20,y+10,20,x+20,y,20,x+27,y,27);
            fill(199, 165, 130);
            quad3(x+18,y+25,18,x+20,y+25,20,x+20,y+40,20,x+18,y+40,18);
            fill(184, 148, 107);
            quad3(x+22,y+25,18,x+20,y+25,20,x+20,y+40,20,x+22,y+40,18);
            fill(255, 91, 54);
            quad3(x+5,y+25,5,x+20,y+25,20,x+20,y+10,20,x+5,y+10,5);
            quad3(x+5,y+10,5,x+20,y+10,20,x+20,y,20,x+13,y,13);
            fill(207, 51, 20);
            quad3(x+35,y+25,5,x+20,y+25,20,x+20,y+10,20,x+35,y+10,5);
            quad3(x+35,y+10,5,x+20,y+10,20,x+20,y,20,x+27,y,13);
                    break;
                case 1:
                    break;
            }
            break;
    }
    strokeWeight(1);
};
var drawItem = function(item,x,y){
    noStroke();
    translate(x,y);
    if(item.id===0||item.count<=0){
        item = new Item(0,0,0,{});
    }
            var c = [];
            switch(item.type){
                case 0:
                    c[0] = color(107, 70, 33);
                    c[1] = color(150, 104, 57);
                    c[2] = color(173, 132, 90);
                    break;
                case 1:
                    c[0] = color(100);
                    c[1] = color(140);
                    c[2] = color(170);
                    break;
                case 2:
                    c[0] = color(150);
                    c[1] = color(210);
                    c[2] = color(255);
                    break;
                case 3:
                    c[0] = color(196, 148, 58);
                    c[1] = color(255, 204, 0);
                    c[2] = color(255);
                    break;
                case 4:
                    c[0] = color(0, 144, 173);
                    c[1] = color(92, 228, 255);
                    c[2] = color(255);
                    break;
                case 5:
                    c[0] = color(0);
                    c[1] = color(55, 35, 92);
                    c[2] = color(103, 76, 153);
            }
    switch(item.id){
        case 9:
            fill(200);
            ellipse(15,5,25,10);
            quad(2.5,5,27.9,5,25,25,10,25);
            ellipse(15,25,20,10);
            fill(255);
            arc(15,5,25,10,217,392);
            fill(150);
            triangle(2.1,5,5,25,10,25);
            arc(15,25,20,10,0,229);
            fill(65, 153, 235);
            ellipse(15,5,20,5);
            triangle(10,5,15,5,12,15);
            ellipse(15,20,3,5);
            break;
        case 10:
            fill(200);
            ellipse(15,5,25,10);
            quad(2.5,5,27.9,5,25,25,10,25);
            ellipse(15,25,20,10);
            fill(255);
            arc(15,5,25,10,217,392);
            fill(150);
            triangle(2.1,5,5,25,10,25);
            arc(15,25,20,10,0,229);
            fill(255, 162, 0);
            ellipse(15,5,20,5);
            triangle(10,5,15,5,12,15);
            ellipse(15,20,3,5);
            fill(255, 251, 127);
            ellipse(11,6,7,3);
            ellipse(20,4,9,3);
            break;
        case 18:
            fill(210);
            beginShape();
            vertex(0,7);
            vertex(7,0);
            vertex(12,6);
            vertex(7,4);
            vertex(4,7);
            vertex(4,13);
            vertex(7,17);
            vertex(12,15);
            vertex(7,20);
            vertex(0,13);
            endShape();
            fill(255);
            quad(0,7,7,0,12,6,7,4);
            fill(150);
            quad(0,13,7,20,12,15,7,17);
            fill(50);
            beginShape();
            vertex(25,12);
            vertex(30,25);
            vertex(20,30);
            vertex(15,25);
            vertex(15,22);
            endShape();
            fill(70);
            quad(25,12,27,17,15,25,15,22);
            fill(20);
            triangle(30,25,20,30,17,27);
            break;
        case 17:
        case 26:
        case 41:
            var opsp = psp;
            psp = 100000;
            scale(3/4);
            var θx = 0;
            var θy = 0;
            cx = cos(θx);
            cy = cos(θy);
            sx = sin(θx);
            sy = sin(θy);
            drawBlock(item.id,-sX,-sY,[0,0,1,1],item.type,item.tag);
            cx = cos(min(xRot+mxRot,55));
            cy = cos(min(yRot+myRot,55));
            sx = -sin(min(xRot+mxRot,55));
            sy = sin(min(yRot+myRot,55));
            psp = opsp;
            scale(4/3);
            break;
        case 42:
            translate(13,20);
            scale(0.4);
            var θx = 25;
            var θy = 25;
            cx = cos(θx);
            cy = cos(θy);
            sx = sin(θx);
            sy = sin(θy);
            drawBlock(42,-sX,-sY,[0,0,1,1],item.type,{top:false,open:1,align:LEFT});
            drawBlock(42,-sX,-sY-40,[0,0,1,1],item.type,{top:true,open:1,align:LEFT});
            cx = cos(min(xRot+mxRot,55));
            cy = cos(min(yRot+myRot,55));
            sx = -sin(min(xRot+mxRot,55));
            sy = sin(min(yRot+myRot,55));
            scale(2.5);
            translate(-13,-20);
            break;
        case 300:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(0,30,25,5);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(0,30,25,5);
            noStroke();
            fill(c[1]);
            beginShape();
            vertex(5,0);
            vertex(20,0);
            vertex(30,10);
            vertex(30,25);
            vertex(25,12);
            vertex(18,5);
            endShape();
            fill(c[0]);
            beginShape();
            vertex(5,0);
            vertex(19,3);
            vertex(27,11);
            vertex(30,25);
            vertex(25,12);
            vertex(18,5);
            endShape();
            fill(c[2]);
            beginShape();
            vertex(30,10);
            vertex(20,0);
            vertex(5,0);
            vertex(18,2);
            endShape();
            break;
        case 301:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(0,30,25,5);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(0,30,25,5);
            noStroke();
            fill(c[1]);
            beginShape();
            vertex(15,7);
            vertex(23,15);
            vertex(30,7);
            vertex(30,3);
            vertex(27,0);
            vertex(23,0);
            endShape();
            fill(c[0]);
            beginShape();
            vertex(15,7);
            vertex(25,2);
            vertex(30,3);
            vertex(27,0);
            vertex(23,0);
            endShape();
            triangle(18,10,20,12,25,5);
            fill(c[2]);
            beginShape();
            triangle(23,15,30,7,30,3);
            endShape();
            break;
        case 302:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(0,30,23,7);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(0,30,23,7);
            noStroke();
            fill(c[1]);
            beginShape();
            vertex(22,0);
            vertex(15,0);
            vertex(10,5);
            vertex(10,12);
            vertex(19,11);
            vertex(20,15);
            vertex(25,15);
            vertex(25,10);
            vertex(21,9);
            endShape();
            fill(c[0]);
            quad(20,15,25,15,25,10,23,13);
            triangle(10,12,19,11,10,10);
            fill(c[2]);
            beginShape();
            vertex(22,0);
            vertex(15,0);
            vertex(10,5);
            vertex(10,12);
            vertex(12,7);
            vertex(17,2);
            endShape();
            break;
        case 303:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(0,30,25,5);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(0,30,25,5);
            noStroke();
            fill(c[1]);
            beginShape();
            vertex(10,0);
            vertex(20,0);
            vertex(28,8);
            vertex(25,12);
            vertex(18,5);
            endShape();
            fill(c[0]);
            beginShape();
            vertex(10,0);
            vertex(19,3);
            vertex(25,10);
            vertex(24,11);
            vertex(18,5);
            endShape();
            fill(c[2]);
            triangle(14,0,20,0,28,8);
            break;
        case 304:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(3,27,10,20);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(3,27,10,20);
            noStroke();
            fill(c[1]);
            quad(8,18,25,0,30,5,12,22);
            triangle(25,0,30,0,30,5);
            fill(c[0]);
            rect(0,24,6,6);
            quad(4,10,8,22,20,26,11,19);
            beginShape();
            vertex(12,22);
            vertex(11,21);
            vertex(29,4);
            vertex(30,0);
            vertex(30,5);
            endShape();
            fill(0,0,0,100);
            quad(6,24,6,30,0,30,4,28);
            quad(4,10,8,22,20,26,9,20);
            fill(c[1]);
            quad(0,30,0,24,6,24,2,26);
            fill(c[2]);
            quad(8,18,25,0,30,0,26,2);
            break;
        case 305:
            stroke(64, 35, 5);
            strokeWeight(4);
            line(0,30,30,0);
            stroke(150, 104, 57);
            strokeWeight(2);
            line(0,30,30,0);
            break;
        case 306:
            switch(item.type){
                case 0:
                    fill(150);
                    quad(0,10,0,20,10,25,10,15);
                    fill(180);
                    quad(10,25,10,15,30,10,30,20);
                    fill(210);
                    quad(0,10,10,15,30,10,20,5);
                    fill(255);
                    quad(0,10,20,5,30,10,20,8);
                    fill(100);
                    quad(0,10,0,20,10,25,2,19);
                    quad(10,25,30,20,30,10,28,19);
                    break;
                case 1:
                    fill(196, 148, 58);
                    quad(0,10,0,20,10,25,10,15);
                    fill(222, 172, 80);
                    quad(10,25,10,15,30,10,30,20);
                    fill(255, 204, 0);
                    quad(0,10,10,15,30,10,20,5);
                    fill(255);
                    quad(0,10,20,5,30,10,20,8);
                    fill(163, 116, 16);
                    quad(0,10,0,20,10,25,2,19);
                    quad(10,25,30,20,30,10,28,19);
                    break;
                case 2:
                    fill(0,144,173);
                    triangle(20,20,20,30,27,23);
                    fill(49, 172, 196);
                    quad(10,20,20,20,20,30,10,30);
                    quad(20,20,27,23,27,13,20,10);
                    fill(92,228,225);
                    rect(10,10,10,10);
                    triangle(10,20,10,30,3,23);
                    triangle(20,10,20,0,27,13);
                    fill(170, 247, 244);
                    quad(10,20,3,23,3,13,10,10);
                    quad(10,10,20,10,20,0,10,0);
                    fill(255);
                    triangle(10,10,10,0,3,13);
                    break;
            }
            break;
        case 307:
            fill(50);
            ellipse(15,20,26,20);
            ellipse(18,15,20,30);
            fill(0);
            bezier(5,20,11,30,17,30,23,25);
            fill(100);
            bezier(15,3,21,0,26,7,26,15);
            fill(50);
            bezier(5,20,11,25,17,25,23,25);
            bezier(15,3,21,5,26,13,26,15);
            break;
        case 308:
            fill(200);
            ellipse(15,5,25,10);
            quad(2.5,5,27.9,5,25,25,10,25);
            ellipse(15,25,20,10);
            fill(255);
            arc(15,5,25,10,217,392);
            fill(150);
            triangle(2.1,5,5,25,10,25);
            arc(15,25,20,10,0,229);
            fill(125);
            ellipse(15,5,20,5);
            break;
        case 309:
            fill(50);
            beginShape();
            vertex(19,0);
            vertex(28,20);
            vertex(11,30);
            vertex(2,20);
            vertex(2,14);
            endShape();
            fill(70);
            quad(19,0,23,9,2,20,2,14);
            fill(20);
            triangle(28,20,11,30,6,24);
            break;
        case 310:
            fill(194, 120, 120);
            beginShape();
            curveVertex(0,25);
            curveVertex(3,18);
            curveVertex(2,23);
            curveVertex(5,28);
            curveVertex(15,28);
            curveVertex(27,18);
            curveVertex(27,6);
            curveVertex(27,6);
            endShape();
            fill(235, 167, 167);
            beginShape();
            curveVertex(0,25);
            curveVertex(15,3);
            curveVertex(10,10);
            curveVertex(3,15);
            curveVertex(2,20);
            curveVertex(5,25);
            curveVertex(15,25);
            curveVertex(27,15);
            curveVertex(27,3);
            curveVertex(15,3);
            curveVertex(10,10);
            endShape();
            fill(247, 205, 205);
            beginShape();
            curveVertex(5,25);
            curveVertex(5,25);
            curveVertex(15,25);
            curveVertex(27,15);
            curveVertex(27,7);
            curveVertex(27,7);
            curveVertex(19,19);
            curveVertex(15,25);
            endShape();
            break;
        case 311:
            fill(143, 115, 79);
            beginShape();
            curveVertex(0,25);
            curveVertex(3,18);
            curveVertex(2,23);
            curveVertex(5,28);
            curveVertex(15,28);
            curveVertex(27,18);
            curveVertex(27,6);
            curveVertex(27,6);
            endShape();
            fill(194, 162, 120);
            beginShape();
            curveVertex(0,25);
            curveVertex(15,3);
            curveVertex(10,10);
            curveVertex(3,15);
            curveVertex(2,20);
            curveVertex(5,25);
            curveVertex(15,25);
            curveVertex(27,15);
            curveVertex(27,3);
            curveVertex(15,3);
            curveVertex(10,10);
            endShape();
            fill(214, 180, 144);
            beginShape();
            quad(13,25,16,24,5,13,4,15);
            quad(9.5,11,11.5,8.5,23,18,22,20);
            quad(27,13,28,11,16,3.5,14,5);
            endShape();
            break;
        case 312:
            fill(179, 72, 30);
            beginShape();
            vertex(0,22);
            vertex(8,30);
            vertex(23,25);
            vertex(28,15);
            vertex(23,16);
            vertex(30,6);
            vertex(26,6);
            vertex(27,3);
            vertex(23,3);
            vertex(22,0);
            vertex(15,3);
            vertex(11,7);
            vertex(11,10);
            endShape();
            fill(58, 97, 10);
            triangle(20,10,10,20,16,17);
            triangle(23,16,10,24,15,25);
            fill(117, 42, 15);
            triangle(8,30,23,25,28,15);
            triangle(5,25,25,5,13,13);
            fill(209, 137, 111);
            quad(22,0,15,3,11,7,11,10);
            triangle(11,10,0,22,3,25);
            triangle(30,6,26,6,20,12);
            break;
        case 313:
            fill(227, 0, 34);
            ellipse(15,13,20,10);
            translate(10,20);
            rotate(75);
            fill(153, 0, 23);
            ellipse(0,0,20,12);
            fill(227, 0, 34);
            ellipse(-1,0,15,10);
            rotate(-75);
            fill(255, 153, 170);
            ellipse(2,-4,16,16);
            fill(227, 0, 34);
            ellipse(4,-2,16,16);
            translate(10,0);
            rotate(-75);
            fill(153, 0, 23);
            ellipse(0,0,20,12);
            fill(227, 0, 34);
            ellipse(1,-2,17,10);
            rotate(75);
            translate(-20,-20);
            fill(87, 43, 1);
            quad(14,10,16,0,19,3,16,10);
            break;
        case 314:
            fill(255, 204, 0);
            ellipse(15,13,20,10);
            translate(10,20);
            rotate(75);
            fill(196, 148, 58);
            ellipse(0,0,20,12);
            fill(255, 204, 0);
            ellipse(-1,0,15,10);
            rotate(-75);
            fill(255);
            ellipse(2,-4,16,16);
            fill(255, 204, 0);
            ellipse(4,-2,16,16);
            translate(10,0);
            rotate(-75);
            fill(196, 148, 58);
            ellipse(0,0,20,12);
            fill(255, 204, 0);
            ellipse(1,-2,17,10);
            rotate(75);
            translate(-20,-20);
            fill(87, 43, 1);
            quad(14,10,16,0,19,3,16,10);
            break;
        case 315:
            fill(130);
            beginShape();
            vertex(15,5);
            vertex(0,20);
            bezierVertex(5,30,25,30,30,20);
            endShape();
            fill(80);
            beginShape();
            vertex(5,15);
            vertex(0,20);
            bezierVertex(5,30,25,30,30,20);
            bezierVertex(25,25,10,25,5,15);
            endShape();
            fill(150);
            triangle(15,5,10,10,30,20);
            break;
        case 316:
            fill(255, 227, 150);
            beginShape();
            vertex(15,5);
            vertex(0,20);
            bezierVertex(5,30,25,30,30,20);
            endShape();
            fill(242, 192, 53);
            beginShape();
            vertex(5,15);
            vertex(0,20);
            bezierVertex(5,30,25,30,30,20);
            bezierVertex(25,25,10,25,5,15);
            endShape();
            fill(255, 241, 204);
            triangle(15,5,10,10,30,20);
            fill(255);
            ellipse(7,20,3,3);
            ellipse(20,15,3,3);
            ellipse(18,23,3,3);
            ellipse(13,9,3,3);
            break;
        default:
            translate(9,12);
            scale(0.5);
            var θx = 25;
            var θy = 25;
            cx = cos(θx);
            cy = cos(θy);
            sx = sin(θx);
            sy = sin(θy);
            drawBlock(item.id,-sX,-sY,[0,0,1,1],item.type,item.tag);
            
            
            cx = cos(min(xRot+mxRot,55));
            cy = cos(min(yRot+myRot,55));
            sx = -sin(min(xRot+mxRot,55));
            sy = sin(min(yRot+myRot,55));
            scale(2);
            translate(-9,-12);
    }
    strokeWeight(1);
    noStroke();
    textSize(15);
    textAlign(RIGHT,TOP);
    if(item.count>1){
        fill(100);
        text(item.count,33,17);
        fill(255);
        text(item.count,31,15);
    }
    if(item.tag.durability&&item.tag.durability<item.tag.maxDurability){
        fill(50);
        rect(0,27,30,3);
        fill(min(255,510-510*item.tag.durability/item.tag.maxDurability),min(255,510*item.tag.durability/item.tag.maxDurability),0);
        rect(0,25,30*item.tag.durability/item.tag.maxDurability,3);
    }
    translate(-x,-y);
};
var Entity = function(id,x,y,tag){
    this.id = id;
    this.x = x;
    this.y = y;
    this.tag = tag;
    this.mx = 0;
    this.my = 0;
    this.inLava = false;
    this.inWater = false;
    this.inFire = false;
    this.direction = 0;
    this.facing = 0;
    this.hurtTimer = 0;
    this.dimension = dimension;
    switch(id){
        case "player":
        case "zombie":
            this.hitbox = {width:24,height:72,eye:65};
            this.drops = {
                drops: [new Item(312,1,0)],
                odds: [1],
                count: [[0,2]]
            };
            this.arm = 0;
            this.leg = 0;
            this.hit = 0;
            break;
        case "creeper":
            this.hitbox = {width:24,height:64,eye:57};
            this.drops = {
                drops: [new Item(315,1,0)],
                odds: [1],
                count: [[0,2]]
            };
            this.leg = 0;
            break;
        case "item":
            this.hitbox = {width:20,height:20};
            break;
        case "pig":
            this.hitbox = {width:36,height:36,eye:30};
            this.drops = {
                drops: [new Item(310,1,0)],
                odds: [1],
                count: [[1,3]]
            };
            this.leg = 0;
            this.alarm = 0;
            break;
        case "sand":
            this.hitbox = {width:39,height:39};
            break;
        case "tnt":
            this.hitbox = {width:39,height:39,fuse:0};
            break;
        case "p_shock":
            this.hitbox = {width:0,height:0};
            this.noclip = true;
            if(!tag.color){
                this.tag.color = color(random(220,235));
            }
            break;
        case "p_crumb":
            this.hitbox = {width:10,height:10};
            break;
        case "p_smoke":
        case "p_spiral":
        case "p_flame":
            this.hitbox = {width:0,height:0};
            this.noclip = true;
            if(!tag.color){
                this.tag.color = color(random(220,235));
            }
            break;
    }
    this.touching = function(id){
        var retval = false;
        for(var i = 0; i < this.hitbox.height/40; i++){
            for(var j = 0; j < this.hitbox.width/40; j++){
                var wx = this.x+this.mx;
                var wy = this.y+this.my;
                var water = getWorldTag(floor(wx/40+j),floor(wy/40+i));
                if(!water.h1||!water.h2){
                    water = {h1:0,h2:0};
                }
                var wh = max(water.h1,water.h2)*5-2;
                if(getWorld(floor(wx/40+j),floor(wy/40+i))===id&&(wy+i*40)%40<40-wh){
                    retval=true;
                }
                water = getWorldTag(ceil(wx/40+this.hitbox.width/40)-1,floor(wy/40+i));
                if(!water.h1||!water.h2){
                    water = {h1:0,h2:0};
                }
                wh = max(water.h1,water.h2)*5-2;
                if(getWorld(ceil((wx+this.hitbox.width)/40)-1,floor(wy/40+i))===id&&(wy+i*40)%40<40-wh){
                    retval=true;
                }
                water = getWorldTag(floor(wx/40+j),ceil((wy+this.hitbox.height)/40)-1);
                if(!water.h1||!water.h2){
                    water = {h1:0,h2:0};
                }
                wh = max(water.h1,water.h2)*5-2;
                if(getWorld(floor(wx/40+j),ceil((wy+this.hitbox.height)/40))===id&&(wy+this.hitbox.height)%40<40-water.level*5){
                    retval=true;
                }
            }
        }
        return retval;
    };
};
var curSlot = 0;
var curItem = new Item(0,0,0,{});
var curRecipe = 0;
var List = function(stuff){
    this.Node = function(val,next){
        this.val = val;
        this.next = next;
    };
    this.length = stuff.length;
    this.head = new this.Node(stuff[0]);
    var curNode = this.head;
    for(var i = 1; i <= stuff.length; i++){
        curNode.next = new this.Node(stuff[i]);
        curNode = curNode.next;
    }
    this.getValAt = function(index){
        curNode = this.head;
        for(var i = 0; i < index; i++){
            curNode = curNode.next;
        }
        return curNode.val;
    };
    this.setValAt = function(index,val){
        curNode = this.head;
        for(var i = 0; i < index; i++){
            curNode = curNode.next;
        }
        curNode.val = val;
    };
    this.addValAt = function(index,val){
        if(index!==0){
            curNode = this.head;
            for(var i = 0; i < index-1; i++){
                curNode = curNode.next;
            }
            curNode.next = new this.Node(val,curNode.next);
        }else{
            this.head = new this.Node(val,this.head);
        }
        this.length++;
    };
    this.append = function(val){
        this.addValAt(this.length,val);
    };
    this.deleteValAt = function(index,val){
        var retval;
        if(index===0){
            retval = this.head.val;
            this.head = this.head.next;
        }else{
            curNode = this.head;
            for(var i = 0; i < index-1; i++){
                curNode = curNode.next;
            }
            retval = curNode.next.val;
            curNode.next = curNode.next.next;
        }
        this.length--;
        return retval;
    };
    this.toString = function(){
        var retval = "(";
        for(var i = this.head; i.next; i = i.next){
            retval = retval+i.val;
            if(i.next.next){
                retval = retval+",";
            }else{
                retval = retval+")";
            }
        }
        return retval;
    };
};
var portals = [new List([]),new List([])];
var entities = new List([new Entity("player",0,groundLevel(0)*40+160,{
        speed:2.5,
        inventory: [
            [],
            [],
            [],
            []
        ],
        health:20,
        air:10,
        direction: 0,
        hunger:20,
        saturation:5,
        xp:0,
        lvl:0,
        
    })]);
var placedBlocks = new List([]);
for(var i = 0; i < 36; i++){
    var inv = entities.head.val.tag.inventory;
    inv[floor(i/9)][i%9] = new Item(0,0,0);
}
var spawnEntity = function(entity){
    if(entity&&entity.id){
        entities.append(entity);
    }
};
var drawEntity = function(entity,x,y){
    noStroke();
    if(entity.fire){
    var M = [[x+40,y+40,25],[x,y+40,25]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+i*entity.hitbox.width/20,y+min(fire[0][i],0)*entity.hitbox.height/40+40,25];
        M[i+22] = [x+i*entity.hitbox.width/20,y+min(fire[1][i],0)*entity.hitbox.height/40+40,25];
        M[i+42] = [x+i*entity.hitbox.width/20,y+min(fire[2][i],0)*entity.hitbox.height/40+40,25];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
    switch(entity.id){
        case "player":
            var headRot = entity.direction;
            if(headRot>90||headRot<-90){
            if(headRot>90){headRot=180-headRot;}
            if(headRot<-90){headRot=-180-headRot;}
            if(entity.facing<180){entity.facing+=20;}
            }else if(entity.facing>0){entity.facing-=20;}
            var cf = cos(entity.facing);
            var ch = cos(headRot);
            var sh = -sin(headRot);
            entity.leg+=entity.mx*4;
            var legRot = sin(entity.leg)*min(abs(entity.mx*15),30);
            if(entity.arm>0){
                entity.arm-=5;
            }
            var armRot = entity.arm;
            var ca = cos(legRot);
            var sa = -sin(legRot);
            y = y+40;
            x = x+entity.hitbox.width/2;
            noStroke();
            
            fill(11, 11, 125);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,23,
            x-cf*4.5*ca,y-27+sa*4.5,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            fill(70);
            quad3(x+cf*(4.5*ca+20*sa),y-27-4.5*sa+20*ca,23,
            x-cf*(4.5*ca-20*sa),y-27+4.5*sa+20*ca,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            
            fill(37, 177, 199);
            quad3(x+cf*(4.5*ca-4.5*sa),y-49.5-sa*4.5-ca*4,23,
            x-cf*(4.5*ca+4.5*sa),y-49.5+sa*4.5-ca*4,23,
            x-cf*(4.5*ca-4.5*sa),y-49.5+4*sa+4.5*ca,23,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4*sa+4.5*ca,23);
            fill(143, 112, 71);
            quad3(x-cf*(4.5*ca-4.5*sa),y-49.5+4.5*sa+4.5*ca,23,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4.5*sa+4.5*ca,23,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,23,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,23);
            
            fill(43, 191, 214);
            quad3(x-cf*4.5,y-27,20,
            x+cf*4.5,y-27,20,
            x+cf*4.5,y-54,20,
            x-cf*4.5,y-54,20);
            
            fill(171, 140, 97);
            quad3(x-ch*9*cf,y-54-sh*9,20,
            x+ch*9*cf,y-54+sh*9,20,
            x+(ch*9+sh*18)*cf,y-54+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-54-sh*9-ch*18,20);
            fill(84, 41, 7);
            quad3(x+cf*(ch*9+sh*18),y-54+sh*9-ch*18,20,
            x-cf*(ch*9-sh*18),y-54-sh*9-ch*18,20,
            x-cf*(ch*9-sh*13),y-54-sh*9-ch*13,20,
            x+cf*(ch*9+sh*13),y-54+sh*9-ch*13,20);
            triangle3(x+cf*(ch*9+sh*18),y-54+sh*9-ch*18,20,
            x-cf*(ch*9-sh*18),y-54-sh*9-ch*18,20,
            x-cf*ch*9,y-54-sh*9,20);
            fill(255);
            quad3(x+cf*(ch*4.5+sh*11),y-54+sh*4.5-ch*11,20,
            x+cf*(ch*9+sh*11),y-54+sh*9-ch*11,20,
            x+cf*(ch*9+sh*9),y-54+sh*9-ch*9,20,
            x+cf*(ch*4.5+sh*9),y-54+sh*4.5-ch*9,20);
            fill(11, 11, 125);
            quad3(x+cf*(ch*6.75+sh*11),y-54+sh*6.75-ch*11,20,
            x+cf*(ch*9+sh*11),y-54+sh*9-ch*11,20,
            x+cf*(ch*9+sh*9),y-54+sh*9-ch*9,20,
            x+cf*(ch*6.75+sh*9),y-54+sh*6.75-ch*9,20);
            
            sa = -sa;
            fill(40, 40, 184);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,17,
            x-cf*4.5*ca,y-27+sa*4.5,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            fill(100);
            quad3(x+cf*(4.5*ca+20*sa),y-27-4.5*sa+20*ca,17,
            x-cf*(4.5*ca-20*sa),y-27+4.5*sa+20*ca,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            
            if(armRot>0){
                ca = cos(armRot);
                sa = sin(armRot);
            }
            translate(X3D(x,y-48,20),Y3D(x,y-48,20));
            scale(cf,1);
            if(stick[entity.tag.inventory[0][curSlot].id]){
                scale(0.7*cx,-0.7*cy);
                var rotVal;
                if(armRot>0){
                    rotVal = armRot+45;
                }else{
                    rotVal = legRot+45;
                }
                rotate(rotVal);
                drawItem(new Item(entity.tag.inventory[0][curSlot].id,1,entity.tag.inventory[0][curSlot].type),X3D(10,-20,0)-30,Y3D(10,-20,0)-30);
                rotate(-rotVal);
                scale(1/(0.7*cx),-1/(0.7*cy));
            }else{
                scale(0.65,0.65);
                var rotVal;
                if(armRot>0){
                    rotVal = -armRot;
                }else{
                    rotVal = -legRot;
                }
                rotate(rotVal);
                drawItem(new Item(entity.tag.inventory[0][curSlot].id,1,entity.tag.inventory[0][curSlot].type),X3D(0,20,0),Y3D(0,20,0));
                rotate(-rotVal);
                scale(1/0.65,1/0.65);
            }
            scale(1/cf,1);
            translate(-X3D(x,y-48,20),-Y3D(x,y-48,20));
            fill(53, 206, 230);
            quad3(x+cf*(4.5*ca-4.5*sa),y-49.5-sa*4.5-ca*4,17,
            x-cf*(4.5*ca+4.5*sa),y-49.5+sa*4.5-ca*4,17,
            x-cf*(4.5*ca-4.5*sa),y-49.5+4*sa+4.5*ca,17,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4*sa+4.5*ca,17);
            fill(171, 140, 97);
            quad3(x-cf*(4.5*ca-4.5*sa),y-49.5+4.5*sa+4.5*ca,17,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4.5*sa+4.5*ca,17,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,17,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,17);
        if(entity.hurtTimer>0){
            ca = cos(legRot);
            sa = -sin(legRot);
            fill(255, 0, 0, entity.hurtTimer*5);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,23,
            x-cf*4.5*ca,y-27+sa*4.5,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            quad3(x-cf*(4.5*ca+4.5*sa),y-49.5+4*sa-4.5*ca,23,
            x+cf*(4.5*ca-4.5*sa),y-49.5-4*sa-4.5*ca,23,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,23,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,23);
            quad3(x-cf*4.5,y-27,20,
            x+cf*4.5,y-27,20,
            x+cf*4.5,y-54,20,
            x-cf*4.5,y-54,20);
            quad3(x-ch*9*cf,y-54-sh*9,20,
            x+ch*9*cf,y-54+sh*9,20,
            x+(ch*9+sh*18)*cf,y-54+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-54-sh*9-ch*18,20);
            sa = -sa;
            quad3(x+cf*4.5*ca,y-27-sa*4.5,17,
            x-cf*4.5*ca,y-27+sa*4.5,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            if(armRot>0){
                ca = cos(armRot);
                sa = sin(armRot);
            }
            quad3(x-cf*(4.5*ca+4.5*sa),y-49.5+4*sa-4.5*ca,17,
            x+cf*(4.5*ca-4.5*sa),y-49.5-4*sa-4.5*ca,17,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,17,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,17);
            }
            y = y-40;
            x = x-12;
            break;
        case "item":
            y = y+40;
            if(entity.tag.life<9800||floor(entity.tag.life/3)&1){
    var dispItem = new Item(entity.tag.item.id,1,entity.tag.item.type,entity.tag.item.tag);
    if(entity.tag.item.count>1){
        drawItem(dispItem,X3D(x+10,y-15+sin(entity.tag.life*2)*5,20)-13,Y3D(x+15,y-20+sin(entity.tag.life*2)*5-10,20));
    }
    if(entity.tag.item.count>32){
        drawItem(dispItem,X3D(x+10,y-15+sin(entity.tag.life*2)*5,20)-18,Y3D(x+15,y-20+sin(entity.tag.life*2)*5-13,20));
    }
    drawItem(dispItem,X3D(x+10,y-15+sin(entity.tag.life*2)*5,20)-15,Y3D(x+15,y-20+sin(entity.tag.life*2)*5-15,20));
            }
            y = y-40;
            break;
        case "pig":
            var headRot = entity.direction;
            if(headRot>90||headRot<-90){
            if(headRot>90){headRot=180-headRot;}
            if(headRot<-90){headRot=-180-headRot;}
            if(entity.facing<180){entity.facing+=20;}
            }else if(entity.facing>0){entity.facing-=20;}
            var cf = cos(entity.facing);
            var ch = cos(headRot);
            var sh = -sin(headRot);
            entity.leg+=entity.mx*4;
            var legRot = sin(entity.leg)*min(abs(entity.mx*15),30);
            if(entity.arm>0){
                entity.arm-=5;
            }
            var armRot = entity.arm;
            var ca = cos(legRot);
            var sa = -sin(legRot);
            y = y+40;
            x = x+entity.hitbox.width/2;
            noStroke();
            
            fill(240, 170, 170);
            quad3(x+cf*(4.5*ca-16),y-16-sa*4.5,21,
            x-cf*(4.5*ca+16),y-16+sa*4.5,21,
            x-cf*(4.5*ca-16*sa+16),y-16+4.5*sa+16*ca,21,
            x+cf*(4.5*ca+16*sa-16),y-16-4.5*sa+16*ca,21);
            
            sa = -sa;
            quad3(x+cf*(4.5*ca+14),y-16-sa*4.5,21,
            x-cf*(4.5*ca-14),y-16+sa*4.5,21,
            x-cf*(4.5*ca-16*sa-14),y-16+4.5*sa+16*ca,21,
            x+cf*(4.5*ca+16*sa+14),y-16-4.5*sa+16*ca,21);
            
            fill(245, 174, 174);
            quad3(x-cf*18,y-36,20,
            x+cf*18,y-36,20,
            x+cf*18,y-16,20,
            x-cf*18,y-16,20);
            
            x = x+16*cf;
            fill(247, 183, 183);
            quad3(x+cf*(-ch*3-sh*9),y-34-sh*3+ch*9,20,
            x+cf*(-ch*3+sh*9),y-34-sh*3-ch*9,20,
            x+cf*(ch*15+sh*9),y-34+sh*15-ch*9,20,
            x+cf*(ch*15-sh*9),y-34+sh*15+ch*9,20);
            quad3(x+cf*(ch*15-sh*6),y-34+sh*15+ch*6,20,
            x+cf*(ch*18-sh*6),y-34+sh*18+ch*6,20,
            x+cf*ch*18,y-34+sh*18,20,
            x+cf*ch*15,y-34+sh*15,20);
            fill(235, 159, 159);
            triangle3(x+cf*(ch*5-sh*3),y-34+sh*5+ch*3,20,
            x+cf*(ch*5+sh*3),y-34+sh*5-ch*3,20,
            x+cf*ch*10,y-34+sh*10,20);
            fill(255);
            quad3(x+cf*ch*15,y-34+sh*15,20,
            x+cf*ch*11,y-34+sh*11,20,
            x+cf*(ch*11+sh*2),y-34+sh*11-ch*2,20,
            x+cf*(ch*15+sh*2),y-34+sh*15-ch*2,20);
            fill(0);
            quad3(x+cf*ch*14,y-34+sh*14,20,
            x+cf*ch*12,y-34+sh*12,20,
            x+cf*(ch*12+sh*2),y-34+sh*12-ch*2,20,
            x+cf*(ch*14+sh*2),y-34+sh*14-ch*2,20);
            /*
            fill(209, 142, 142);
            triangle3(x+cf*(ch*9+sh*18),y-54+sh*9-ch*18,20,
            x-cf*(ch*9-sh*18),y-54-sh*9-ch*18,20,
            x-cf*ch*9,y-54-sh*9,20);
            fill(0);
            quad3(x+cf*(ch*4.5+sh*11),y-54+sh*4.5-ch*11,20,
            x+cf*(ch*9+sh*11),y-54+sh*9-ch*11,20,
            x+cf*(ch*9+sh*9),y-54+sh*9-ch*9,20,
            x+cf*(ch*4.5+sh*9),y-54+sh*4.5-ch*9,20);
            */
            x = x-16*cf;
            fill(247, 183, 183);
            quad3(x+cf*(4.5*ca-16),y-16-sa*4.5,19,
            x-cf*(4.5*ca+16),y-16+sa*4.5,19,
            x-cf*(4.5*ca-16*sa+16),y-16+4.5*sa+16*ca,19,
            x+cf*(4.5*ca+16*sa-16),y-16-4.5*sa+16*ca,19);
            sa = -sa;
            quad3(x+cf*(4.5*ca+14),y-16-sa*4.5,19,
            x-cf*(4.5*ca-14),y-16+sa*4.5,19,
            x-cf*(4.5*ca-16*sa-14),y-16+4.5*sa+16*ca,19,
            x+cf*(4.5*ca+16*sa+14),y-16-4.5*sa+16*ca,19);
        if(entity.hurtTimer>0){
            fill(255, 0, 0, entity.hurtTimer*5);
            quad3(x+cf*(4.5*ca-16),y-16-sa*4.5,21,
            x-cf*(4.5*ca+16),y-16+sa*4.5,21,
            x-cf*(4.5*ca-16*sa+16),y-16+4.5*sa+16*ca,21,
            x+cf*(4.5*ca+16*sa-16),y-16-4.5*sa+16*ca,21);
            sa = -sa;
            quad3(x+cf*(4.5*ca+14),y-16-sa*4.5,21,
            x-cf*(4.5*ca-14),y-16+sa*4.5,21,
            x-cf*(4.5*ca-16*sa-14),y-16+4.5*sa+16*ca,21,
            x+cf*(4.5*ca+16*sa+14),y-16-4.5*sa+16*ca,21);
            quad3(x-cf*18,y-36,20,
            x+cf*18,y-36,20,
            x+cf*18,y-16,20,
            x-cf*18,y-16,20);
            
            x = x+16*cf;
            quad3(x+cf*(-ch*3-sh*9),y-34-sh*3+ch*9,20,
            x+cf*(-ch*3+sh*9),y-34-sh*3-ch*9,20,
            x+cf*(ch*15+sh*9),y-34+sh*15-ch*9,20,
            x+cf*(ch*15-sh*9),y-34+sh*15+ch*9,20);
            quad3(x+cf*(ch*15-sh*6),y-34+sh*15+ch*6,20,
            x+cf*(ch*18-sh*6),y-34+sh*18+ch*6,20,
            x+cf*ch*18,y-34+sh*18,20,
            x+cf*ch*15,y-34+sh*15,20);
            triangle3(x+cf*(ch*5-sh*3),y-34+sh*5+ch*3,20,
            x+cf*(ch*5+sh*3),y-34+sh*5-ch*3,20,
            x+cf*ch*10,y-34+sh*10,20);
            x = x-16*cf;
            quad3(x+cf*(4.5*ca-16),y-16-sa*4.5,19,
            x-cf*(4.5*ca+16),y-16+sa*4.5,19,
            x-cf*(4.5*ca-16*sa+16),y-16+4.5*sa+16*ca,19,
            x+cf*(4.5*ca+16*sa-16),y-16-4.5*sa+16*ca,19);
            sa = -sa;
            quad3(x+cf*(4.5*ca+14),y-16-sa*4.5,19,
            x-cf*(4.5*ca-14),y-16+sa*4.5,19,
            x-cf*(4.5*ca-16*sa-14),y-16+4.5*sa+16*ca,19,
            x+cf*(4.5*ca+16*sa+14),y-16-4.5*sa+16*ca,19);
        }
            y = y-40;
            x = x-entity.hitbox.width/2;
            break;
        case "creeper":
            y = y+40;
            x = x+entity.hitbox.width/2;
            var headRot = entity.direction;
            if(headRot>90||headRot<-90){
            if(headRot>90){headRot=180-headRot;}
            if(headRot<-90){headRot=-180-headRot;}
            if(entity.facing<180){entity.facing+=20;}
            }else if(entity.facing>0){entity.facing-=20;}
            var cf = cos(entity.facing);
            if(entity.tag.fuse<90){
            if(floor(entity.tag.fuse/10)%2===0){
                fill(255);
            }else{
                fill(82, 204, 92);
            }
            var sc = 1;
            if(entity.tag.fuse<=20){
                sc = (20-entity.tag.fuse)/20;
                sc = sc*sc*sc/3+1;
            }
            cf = cf*sc;
            quad3(x-cf*5,y-16*sc,22,x-cf*14,y-16*sc,22,
            x-cf*14,y,22,x-cf*5,y,22);
            quad3(x+cf*5,y-16*sc,22,x+cf*14,y-16*sc,22,
            x+cf*14,y,22,x+cf*5,y,22);
            quad3(x-cf*5,y-46*sc,20,x+cf*5,y-46*sc,20,
            x+cf*5,y-15*sc,20,x-cf*5,y-15*sc,20);
            quad3(x-cf*9,y-46*sc,20,x-cf*9,y-64*sc,20,
            x+cf*9,y-64*sc,20,x+cf*9,y-46*sc,20);
            quad3(x-cf*5,y-16*sc,22,x-cf*14,y-16*sc,18,
            x-cf*14,y,22,x-cf*5,y,18);
            quad3(x+cf*5,y-16*sc,22,x+cf*14,y-16*sc,18,
            x+cf*14,y,22,x+cf*5,y,18);
            if(floor(entity.tag.fuse/10)%2!==0){
                fill(50);
                quad3(x+cf*7,y-sc*55,20,x+cf*7,y-sc*59.5,20,
                x+cf*2.5,y-sc*59.5,20,x+cf*2.5,y-sc*55,20);
                quad3(x+cf*7,y-sc*55,20,x+cf*9,y-sc*55,20,
                x+cf*9,y-sc*48.5,20,x+cf*7,y-sc*48.5,20);
                quad3(x+cf*7,y-sc*52.5,20,x+cf*5,y-sc*52.5,20,
                x+cf*5,y-sc*46,20,x+cf*7,y-sc*46,20);
            }
            }else{
            var ch = cos(headRot);
            var sh = -sin(headRot);
            entity.leg+=entity.mx*4;
            var legRot = sin(entity.leg)*min(abs(entity.mx*15),30);
            var ca = cos(legRot);
            var sa = -sin(legRot);
            noStroke();
            
            fill(70, 184, 78);
            quad3(x-cf*5,y-16,22,
            x-cf*(9*ca+5),y-16+sa*5,22,
            x-cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,22,
            x+cf*(16*sa-5),y-16-4.5*sa+16*ca,22);
            
            quad3(x+cf*5,y-16,22,
            x+cf*(9*ca+5),y-16+sa*5,22,
            x+cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,22,
            x-cf*(16*sa-5),y-16-4.5*sa+16*ca,22);
            
            fill(82, 204, 92);
            quad3(x-cf*5,y-46,20,
            x+cf*5,y-46,20,
            x+cf*5,y-15,20,
            x-cf*5,y-15,20);
            
            quad3(x-ch*9*cf,y-46-sh*9,20,
            x+ch*9*cf,y-46+sh*9,20,
            x+(ch*9+sh*18)*cf,y-46+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-46-sh*9-ch*18,20);
            fill(50);
            quad3(x+(ch*7+sh*13.5)*cf,y-46+sh*7-ch*13.5,20,
            x+(ch*2.5+sh*13.5)*cf,y-46+sh*2.5-ch*13.5,20,
            x+(ch*2.5+sh*9)*cf,y-46+sh*2.5-ch*9,20,
            x+(ch*7+sh*9)*cf,y-46+sh*7-ch*9,20);
            quad3(x+(ch*7+sh*9)*cf,y-46+sh*7-ch*9,20,
            x+(ch*9+sh*9)*cf,y-46+sh*9-ch*9,20,
            x+(ch*9+sh*2.5)*cf,y-46+sh*9-ch*2.5,20,
            x+(ch*7+sh*2.5)*cf,y-46+sh*7-ch*2.5,20);
            quad3(x+(ch*7+sh*6.5)*cf,y-46+sh*7-ch*6.5,20,
            x+(ch*5+sh*6.5)*cf,y-46+sh*5-ch*6.5,20,
            x+ch*5*cf,y-46+sh*5,20,
            x+ch*7*cf,y-46+sh*7,20);
            
            
            fill(82, 204, 90);
            sa = -sa;
            quad3(x-cf*5,y-16,18,
            x-cf*(9*ca+5),y-16+sa*5,18,
            x-cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,18,
            x+cf*(16*sa-5),y-16-4.5*sa+16*ca,18);
            quad3(x+cf*5,y-16,18,
            x+cf*(9*ca+5),y-16+sa*5,18,
            x+cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,18,
            x-cf*(16*sa-5),y-16-4.5*sa+16*ca,18);
        if(entity.hurtTimer>0){
            fill(255, 0, 0, entity.hurtTimer*5);
            quad3(x-cf*5,y-16,22,
            x-cf*(9*ca+5),y-16+sa*5,22,
            x-cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,22,
            x+cf*(16*sa-5),y-16-4.5*sa+16*ca,22);
            quad3(x+cf*5,y-16,22,
            x+cf*(9*ca+5),y-16+sa*5,22,
            x+cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,22,
            x-cf*(16*sa-5),y-16-4.5*sa+16*ca,22);
            quad3(x-cf*5,y-46,20,
            x+cf*5,y-46,20,
            x+cf*5,y-15,20,
            x-cf*5,y-15,20);
            quad3(x-ch*9*cf,y-46-sh*9,20,
            x+ch*9*cf,y-46+sh*9,20,
            x+(ch*9+sh*18)*cf,y-46+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-46-sh*9-ch*18,20);
            quad3(x+(ch*7+sh*13.5)*cf,y-46+sh*7-ch*13.5,20,
            x+(ch*2.5+sh*13.5)*cf,y-46+sh*2.5-ch*13.5,20,
            x+(ch*2.5+sh*9)*cf,y-46+sh*2.5-ch*9,20,
            x+(ch*7+sh*9)*cf,y-46+sh*7-ch*9,20);
            quad3(x+(ch*7+sh*9)*cf,y-46+sh*7-ch*9,20,
            x+(ch*9+sh*9)*cf,y-46+sh*9-ch*9,20,
            x+(ch*9+sh*2.5)*cf,y-46+sh*9-ch*2.5,20,
            x+(ch*7+sh*2.5)*cf,y-46+sh*7-ch*2.5,20);
            quad3(x+(ch*7+sh*6.5)*cf,y-46+sh*7-ch*6.5,20,
            x+(ch*5+sh*6.5)*cf,y-46+sh*5-ch*6.5,20,
            x+ch*5*cf,y-46+sh*5,20,
            x+ch*7*cf,y-46+sh*7,20);
            sa = -sa;
            quad3(x-cf*5,y-16,18,
            x-cf*(9*ca+5),y-16+sa*5,18,
            x-cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,18,
            x+cf*(16*sa-5),y-16-4.5*sa+16*ca,18);
            quad3(x+cf*5,y-16,18,
            x+cf*(9*ca+5),y-16+sa*5,18,
            x+cf*(9*ca-16*sa+5),y-16+4.5*sa+16*ca,18,
            x-cf*(16*sa-5),y-16-4.5*sa+16*ca,18);
        }}
            y = y-40;
            x = x-entity.hitbox.width/2;
            break;
        case "zombie":
            var headRot = entity.direction;
            if(headRot>90||headRot<-90){
            if(headRot>90){headRot=180-headRot;}
            if(headRot<-90){headRot=-180-headRot;}
            if(entity.facing<180){entity.facing+=20;}
            }else if(entity.facing>0){entity.facing-=20;}
            var cf = cos(entity.facing);
            var ch = cos(headRot);
            var sh = -sin(headRot);
            entity.leg+=entity.mx*4;
            var legRot = sin(entity.leg)*min(abs(entity.mx*15),30);
            if(entity.arm>0){
                entity.arm-=5;
            }
            var armRot = entity.arm;
            var ca = cos(legRot);
            var sa = -sin(legRot);
            y = y+40;
            x = x+entity.hitbox.width/2;
            noStroke();
            
            fill(11, 11, 125);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,23,
            x-cf*4.5*ca,y-27+sa*4.5,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            fill(70);
            quad3(x+cf*(4.5*ca+20*sa),y-27-4.5*sa+20*ca,23,
            x-cf*(4.5*ca-20*sa),y-27+4.5*sa+20*ca,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            
            ca = 0;sa = 1;
            fill(37, 177, 199);
            quad3(x+cf*(4.5*ca-4.5*sa),y-49.5-sa*4.5-ca*4,23,
            x-cf*(4.5*ca+4.5*sa),y-49.5+sa*4.5-ca*4,23,
            x-cf*(4.5*ca-4.5*sa),y-49.5+4*sa+4.5*ca,23,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4*sa+4.5*ca,23);
            fill(61, 92, 11);
            quad3(x-cf*(4.5*ca-4.5*sa),y-49.5+4.5*sa+4.5*ca,23,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4.5*sa+4.5*ca,23,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,23,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,23);
            
            var ca = cos(legRot);
            var sa = -sin(legRot);
            fill(43, 191, 214);
            quad3(x-cf*4.5,y-27,20,
            x+cf*4.5,y-27,20,
            x+cf*4.5,y-54,20,
            x-cf*4.5,y-54,20);
            
            fill(88, 133, 20);
            quad3(x-ch*9*cf,y-54-sh*9,20,
            x+ch*9*cf,y-54+sh*9,20,
            x+(ch*9+sh*18)*cf,y-54+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-54-sh*9-ch*18,20);
            fill(63, 102, 5);
            quad3(x+cf*(ch*9+sh*18),y-54+sh*9-ch*18,20,
            x-cf*(ch*9-sh*18),y-54-sh*9-ch*18,20,
            x-cf*(ch*9-sh*13),y-54-sh*9-ch*13,20,
            x+cf*(ch*9+sh*13),y-54+sh*9-ch*13,20);
            triangle3(x+cf*(ch*9+sh*18),y-54+sh*9-ch*18,20,
            x-cf*(ch*9-sh*18),y-54-sh*9-ch*18,20,
            x-cf*ch*9,y-54-sh*9,20);
            fill(0);
            quad3(x+cf*(ch*4.5+sh*11),y-54+sh*4.5-ch*11,20,
            x+cf*(ch*9+sh*11),y-54+sh*9-ch*11,20,
            x+cf*(ch*9+sh*9),y-54+sh*9-ch*9,20,
            x+cf*(ch*4.5+sh*9),y-54+sh*4.5-ch*9,20);
            
            sa = -sa;
            fill(40, 40, 184);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,17,
            x-cf*4.5*ca,y-27+sa*4.5,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            fill(100);
            quad3(x+cf*(4.5*ca+20*sa),y-27-4.5*sa+20*ca,17,
            x-cf*(4.5*ca-20*sa),y-27+4.5*sa+20*ca,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            
            ca = 0;sa = 1;
            translate(X3D(x,y-48,20),Y3D(x,y-48,20));
            scale(cf,1);
            if(stick[entity.tag.inventory[0].id]){
                scale(0.7*cx,-0.7*cy);
                rotate(-legRot);
                drawItem(new Item(entity.tag.inventory[0].id,1,entity.tag.inventory[0].type),X3D(10,-20,0)-30,Y3D(10,-20,0)-30);
                rotate(legRot);
                scale(1/(0.7*cx),-1/(0.7*cy));
            }else{
                scale(0.65,0.65);
                rotate(-legRot);
                drawItem(new Item(entity.tag.inventory[0].id,1,entity.tag.inventory[0].type),X3D(0,20,0),Y3D(0,20,0));
                rotate(legRot);
                scale(1/0.65,1/0.65);
            }
            scale(1/cf,1);
            translate(-X3D(x,y-48,20),-Y3D(x,y-48,20));
            fill(53, 206, 230);
            quad3(x+cf*(4.5*ca-4.5*sa),y-49.5-sa*4.5-ca*4,17,
            x-cf*(4.5*ca+4.5*sa),y-49.5+sa*4.5-ca*4,17,
            x-cf*(4.5*ca-4.5*sa),y-49.5+4*sa+4.5*ca,17,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4*sa+4.5*ca,17);
            fill(88, 133, 20);
            quad3(x-cf*(4.5*ca-4.5*sa),y-49.5+4.5*sa+4.5*ca,17,
            x+cf*(4.5*ca+4.5*sa),y-49.5-4.5*sa+4.5*ca,17,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,17,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,17);
            /*fill(100);
            rect(X3D(x-25,y-80,20),Y3D(x-25,y-80,20),50,10);
            fill(255,0,0);
            rect(X3D(x-25,y-80,20),Y3D(x-25,y-80,20),5*entity.tag.health/2,10);*/
        if(entity.hurtTimer>0){
            ca = cos(legRot);
            sa = -sin(legRot);
            fill(255, 0, 0, entity.hurtTimer*5);
            quad3(x+cf*4.5*ca,y-27-sa*4.5,23,
            x-cf*4.5*ca,y-27+sa*4.5,23,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,23,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,23);
            ca = 0;sa = 1;
            quad3(x-cf*(4.5*ca+4.5*sa),y-49.5+4*sa-4.5*ca,23,
            x+cf*(4.5*ca-4.5*sa),y-49.5-4*sa-4.5*ca,23,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,23,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,23);
            ca = cos(legRot);
            sa = -sin(legRot);
            quad3(x-cf*4.5,y-27,20,
            x+cf*4.5,y-27,20,
            x+cf*4.5,y-54,20,
            x-cf*4.5,y-54,20);
            quad3(x-ch*9*cf,y-54-sh*9,20,
            x+ch*9*cf,y-54+sh*9,20,
            x+(ch*9+sh*18)*cf,y-54+sh*9-ch*18,20,
            x-(ch*9-sh*18)*cf,y-54-sh*9-ch*18,20);
            sa = -sa;
            quad3(x+cf*4.5*ca,y-27-sa*4.5,17,
            x-cf*4.5*ca,y-27+sa*4.5,17,
            x-cf*(4.5*ca-27*sa),y-27+4.5*sa+27*ca,17,
            x+cf*(4.5*ca+27*sa),y-27-4.5*sa+27*ca,17);
            ca = 0;sa = 1;
            quad3(x-cf*(4.5*ca+4.5*sa),y-49.5+4*sa-4.5*ca,17,
            x+cf*(4.5*ca-4.5*sa),y-49.5-4*sa-4.5*ca,17,
            x+cf*(4.5*ca+22.5*sa),y-49.5-4*sa+22.5*ca,17,
            x-cf*(4.5*ca-22.5*sa),y-49.5+4*sa+22.5*ca,17);
            }
            y = y-40;
            x = x-12;
            break;
        case "sand":
            drawBlock(entity.tag.block.id,x-sX,y-sY,[0,0,0,0],entity.tag.block.type);
            break;
        case "tnt":
            if(entity.tag.fuse>20){
                drawBlock(12,x-sX,y-sY,[0,0,0,0],floor(entity.tag.fuse/20)%2);
            }else{
                fill3(color(255),color(255),color(255),color(255));
                var r = 20 - entity.tag.fuse;
                r = r*r/20;
                box3(x-r/2,y-r/2,-r/2,40+r,40+r,40+r,1,1,1,1);
            }
            break;
        case "p_shock":
            fill(entity.tag.color);
            beginShape();
            translate(X3D(x,y,20),Y3D(x,y,20));
            rotate(entity.tag.life*15);
            beginShape();
            vertex(-5,50);
            bezierVertex(70,50,70,-50,-5,-50);
            bezierVertex(45,-35,45,35,-5,50);
            endShape();
            rotate(-entity.tag.life*15);
            translate(-X3D(x,y,20),-Y3D(x,y,20));
            endShape();
            break;
        case "p_crumb":
            y+=40;
            if(blockColor[entity.tag.block.id]){
                fill(blockColor[entity.tag.block.id][entity.tag.block.type]);
                noStroke();
                rect(X3D(x+5,y+5,20)-5,Y3D(x+5,y+5,20)-15,10,10);
            }
            break;
        case "p_smoke":
            fill(entity.tag.color);
            var r = -(entity.tag.life*entity.tag.life)/64 + (1.2*entity.tag.life);
            ellipse(X3D(x,y+40,20),Y3D(x,y+40,20),r/2,r/2);
            break;
        case "p_spiral":
            stroke(entity.tag.color);
            var r = -(entity.tag.life*entity.tag.life)/64 + (1.2*entity.tag.life);
            if(r>0){
            var xx = X3D(x,y+40,20),yy= Y3D(x,y+40,20);
            translate(xx,yy);
            for(var i = 0; i < r; i++){
                var j = i+1;
                var a = entity.tag.life*10+i*40,b = entity.tag.life*10+j*40;
                line(cos(a)*i/2,sin(a)*i/2,cos(b)*j/2,sin(b)*j/2);
            }
            translate(-xx,-yy);
            }
            noStroke();
    }
    noStroke();
    if(entity.fire){
    var M = [[x+40,y+40,15],[x,y+40,15]];
    for(var i = 0; i <= 20; i++){
        M[i+2] = [x+i*entity.hitbox.width/20,y+min(fire[0][i],0)*entity.hitbox.height/80+40,15];
        M[i+22] = [x+i*entity.hitbox.width/20,y+min(fire[1][i],0)*entity.hitbox.height/80+40,15];
        M[i+42] = [x+i*entity.hitbox.width/20,y+min(fire[2][i],0)*entity.hitbox.height/80+40,15];
    }
    M = M3D(M);
    fill(255, 94, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+2][0],M[i+2][1]);
    }
    endShape();
    fill(255, 187, 0);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+22][0],M[i+22][1]);
    }
    endShape();
    fill(255, 233, 178);
    beginShape();
    vertex(M[0][0],M[0][1]);
    vertex(M[1][0],M[1][1]);
    for(var i = 1; i <= 20; i++){
        vertex(M[i+42][0],M[i+42][1]);
    }
    endShape();
    }
};
var drawWorld = function(x,y){
    x = round(x/40); y = round(y/40);
    var dx1 = min(round(6.5/sin(rx+min(xRot+mxRot,rx))),Options.dist);
    var dx2 = max(-round(6.5/sin(rx-min(xRot+mxRot,rx))),-Options.dist);
    var dy1 = min(round(6.5/sin(ry+min(yRot+myRot,ry))),Options.dist)+1;
    var dy2 = max(-round(8/sin(ry-min(yRot+myRot,ry))),-Options.dist);
    /*for(var i = max(y+dy2,0); i < min(y+dy1,127); i++){
        for(var j = x+dx2; j < x+dx1; j++){
            var xx = j*40+sX;
            var yy = sY-i*40;
            noFill();
            stroke(0);
            quad3(xx,yy,400,xx+40,yy,400,xx+40,yy+40,400,xx,yy+40,400);
            line3(xx,yy,40,xx,yy,400);
            line3(xx+40,yy,40,xx+40,yy,400);
            line3(xx,yy+40,40,xx,yy+40,400);
            line3(xx+40,yy+40,40,xx+40,yy+40,400);
        }
    }*/
    var tx = round(sin(xRot+mxRot)*psp/40);
    var ty = round(sin(yRot+myRot)*psp/40)+1;
    for(var i = max(y+dy2,0); i < y+ty; i++){
        for(var j = x+dx2; j <= x+tx; j++){
            if(inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[1,1,1,1],getWorldType(j,i),getWorldTag(j,i));
            }
        }
        for(var j = x+dx1; j >= x+tx; j--){
            if(inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[1,1,1,1],getWorldType(j,i),getWorldTag(j,i));
            }
        }
    }
    for(var i = min(y+dy1,127); i >= y+ty; i--){
        for(var j = x+dx2; j <= x+tx; j++){
            if(inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[1,1,1,1],getWorldType(j,i),getWorldTag(j,i));
            }
        }
        for(var j = x+dx1; j >= x+tx; j--){
            if(inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[1,1,1,1],getWorldType(j,i),getWorldTag(j,i));
            }
        }
    }
    for(var i = max(y+dy2,0); i < y+ty; i++){
        for(var j = x+dx2; j < x+tx; j++){
            var up = getWorld(j,i+1);
            var right = getWorld(j+1,i);
            var down = getWorld(j,i-1);
            var left = getWorld(j-1,i);
            if(getLight(j,i)||nightvision||(dimension!==0&&(opaque[getWorld(j,i+1)]<3||opaque[getWorld(j,i-1)]<3||opaque[getWorld(j-1,i)]<3||opaque[getWorld(j+1,i)]<3))){
            var entindex = 0;
            for(var ent = entities.head; ent.next; ent = ent.next){
                if(entLoc[entindex]&&entLoc[entindex][0]===j&&entLoc[entindex][3]===i&&ent.val.dimension===dimension){
                    drawEntity(ent.val,sX+ent.val.x,sY-ent.val.y);
                }
                entindex++;
            }
            if(!inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[up,left,down,right],getWorldType(j,i),getWorldTag(j,i));
            }
            }else if(solid[getWorld(j,i)]){
                drawBlock(-1,j*40,-i*40,[up,left,down,right]);
            }
        }
        for(var j = x+dx1; j >= x+tx; j--){
            var up = getWorld(j,i+1);
            var right = getWorld(j+1,i);
            var down = getWorld(j,i-1);
            var left = getWorld(j-1,i);
            if(getLight(j,i)||nightvision||(dimension!==0&&(opaque[getWorld(j,i+1)]<3||opaque[getWorld(j,i-1)]<3||opaque[getWorld(j-1,i)]<3||opaque[getWorld(j+1,i)]<3))){
            var entindex = 0;
            for(var ent = entities.head; ent.next; ent = ent.next){
                if(entLoc[entindex]&&entLoc[entindex][0]===j&&entLoc[entindex][3]===i&&ent.val.dimension===dimension){
                    drawEntity(ent.val,sX+ent.val.x,sY-ent.val.y);
                }
                entindex++;
            }
            if(!inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[up,left,down,right],getWorldType(j,i),getWorldTag(j,i));
            }
            }else if(solid[getWorld(j,i)]){
                drawBlock(-1,j*40,-i*40,[up,left,down,right]);
            }
        }
    }
    for(var i = min(y+dy1,127); i >= y+ty; i--){
        for(var j = x+dx2; j < x+tx; j++){
            var up = getWorld(j,i+1);
            var right = getWorld(j+1,i);
            var down = getWorld(j,i-1);
            var left = getWorld(j-1,i);
            if(getLight(j,i)||nightvision||(dimension!==0&&(opaque[getWorld(j,i+1)]<3||opaque[getWorld(j,i-1)]<3||opaque[getWorld(j-1,i)]<3||opaque[getWorld(j+1,i)]<3))){
            var entindex = 0;
            for(var ent = entities.head; ent.next; ent = ent.next){
                if(entLoc[entindex]&&entLoc[entindex][0]===j&&entLoc[entindex][3]===i&&ent.val.dimension===dimension){
                    drawEntity(ent.val,sX+ent.val.x,sY-ent.val.y);
                }
                entindex++;
            }
            if(!inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[up,left,down,right],getWorldType(j,i),getWorldTag(j,i));
            }
            }else if(solid[getWorld(j,i)]){
                drawBlock(-1,j*40,-i*40,[up,left,down,right]);
            }
        }
        for(var j = x+dx1; j >= x+tx; j--){
            var up = getWorld(j,i+1);
            var right = getWorld(j+1,i);
            var down = getWorld(j,i-1);
            var left = getWorld(j-1,i);
            if(getLight(j,i)||nightvision||(dimension!==0&&(opaque[getWorld(j,i+1)]<3||opaque[getWorld(j,i-1)]<3||opaque[getWorld(j-1,i)]<3||opaque[getWorld(j+1,i)]<3))){
            var entindex = 0;
            for(var ent = entities.head; ent.next; ent = ent.next){
                if(entLoc[entindex]&&entLoc[entindex][0]===j&&entLoc[entindex][3]===i&&ent.val.dimension===dimension){
                    drawEntity(ent.val,sX+ent.val.x,sY-ent.val.y);
                }
                entindex++;
            }
            if(!inBack(getWorld(j,i),getWorldTag(j,i))){
                drawBlock(getWorld(j,i),j*40,-i*40,[up,left,down,right],getWorldType(j,i),getWorldTag(j,i));
            }
            }else if(solid[getWorld(j,i)]){
                drawBlock(-1,j*40,-i*40,[up,left,down,right]);
            }
        }
    }
    if(!nightvision){
    for(var i = max(y+dy2,0); i <= min(y+dy1,127); i++){
        for(var j = x+dx2; j <= x+dx1; j++){
            if(getLight(j,i)<15&&!(solid[getWorld(j,i)]&&getLight(j,i)===0&&dimension===0)){
                var xx = j*40+sX;
                var yy = sY-i*40;
                noStroke();
                switch(dimension){
                    case 0:
                        fill(0,0,0,240-getLight(j,i)*16);
                        break;
                    case 1:
                        fill(0,0,0,240-max(getLight(j,i)*16,128));
                        break;
                }
                quad3(xx,yy,0,xx+40,yy,0,xx+40,yy+40,0,xx,yy+40,0);
            }
        }
    }
    }
};
var updateLight = function(a){
if(!lightUpdated){
    lightUpdated = true;
    for(var x = a-16; x < a+32; x++){
        for(var y = 127; y >= 0; y--){
            var RL = getLight(x+1,y), RB = getWorld(x+1,y);
            var LL = getLight(x-1,y), LB = getWorld(x-1,y);
            var UL = getLight(x,y+1), UB = getWorld(x,y+1);
            var DL = getLight(x,y-1), DB = getWorld(x,y-1);
            var RO = opaque[RB];
            var LO = opaque[LB];
            var UO = opaque[UB];
            var DO = opaque[DB];
            if(luminosity[getWorld(x,y)]>=getLight(x,y)&&luminosity[getWorld(x,y)]!==0){
                if(getLightVal(x,y+1)===16){
                    setLight(x,y,max(max(luminosity[getWorld(x,y)],getLight(x,y)),daylight));
                }else{
                    setLight(x,y,max(luminosity[getWorld(x,y)],getLight(x,y)));
                }
            }else{
            if(RO===3&&!luminosity[RB]){RL=0;}
            if(LO===3&&!luminosity[LB]){LL=0;}
            if(UO===3&&!luminosity[UB]){UL=0;}
            if(DO===3&&!luminosity[DB]){DL=0;}
            var elTry = max(max(RL,LL),max(UL,DL));
            if((y>=127||getLightVal(x,y+1)===16)&&elTry<=daylight){
                if(opaque[getWorld(x,y)]>0){
                    setLight(x,y,daylight);
                }else{
                    setLight(x,y,16);
                }
            }else{
                if(elTry===16){
                    if(elTry>daylight){
                        setLight(x,y,elTry);
                    }else{
                        elTry=daylight;
                        setLight(x,y,daylight);
                    }
                }else{
                    if(elTry<0){elTry=0;}
                    if(getLight(x,y)!==0&&getLightVal(x,y)!==16&&elTry<getLight(x,y)){
                        setLight(x,y,0);
                    }
                    if(opaque[getWorld(x,y)]===3&&RO===3&&LO===3&&UO===3&&DO===3){
                        setLight(x,y,0);
                    }else if(RO<3||LO<3||UO<3||DO<3){
                        if(getLight(x,y)!==max(elTry-1,0)){
                            lightUpdated = false;
                        }
                        setLight(x,y,max(elTry-1,0));
                    }
                }
            }
            }
        }
    }
}
};
var genChunk = function(c){
    c = c*16;
    switch(dimension){
case 0:
    for(var x = c; x < c+16; x++){
        var GL = groundLevel(x);
        for(var y = 1; y < GL; y++){
            if(fluid[getWorld(x,y)]){
                var test = noise(x/50,y/40,seed/90);
                if(test>0.425||test<0.4){
                    setWorld(x,y,1);
                }else if(y<11){
                    setWorld(x,y,10);
                    setWorldTag(x,y,{level:0,h1:1,h2:1,flow:120});
                    if(y<10){
                        setWorldTag(x,y,{level:0,h1:0,h2:0,flow:120});
                    }
                }else{
                    setWorld(x,y,0);
                }
            }
        }
        if(GL>=59){
        for(var y = GL; y < GL+3; y++){
            if(fluid[getWorld(x,y)]){
                var test = noise(x/50,y/40,seed/90);
                if(test>0.425||test<0.4){
                    setWorld(x,y,3);
                }
            }
        }
        setWorld(x,0,8);
        if(fluid[getWorld(x,GL+3)]&&GL>=57){
            var test = noise(x/50,(GL+3)/40,seed/90);
            if(test>0.425||test<0.4){
                setWorld(x,GL+3,2);
                if(!floor(random(0,16))){
                    spawnEntity(new Entity("pig",x*40,GL*40+160,{  
                        speed:1,
                        health:10,
                        air:20,
                        direction:0
                    }));
                }
                if(floor(noise(seed/4,x/3)*10000)%16===0&&getWorld(x,GL+4)===0){
                    setWorld(x,GL+4,26);
                    setWorldType(x,GL+4,floor(noise(seed/4,x/8)*10000)&1);
                }
                if(floor(noise(seed/4,x/3)*10000)%5===0&&getWorld(x,GL+4)===0){
                    setWorld(x,GL+4,27);
                }
            }
        }
        }else if(GL>=54){
        for(var y = GL; y < GL+4; y++){
            if(fluid[getWorld(x,y)]){
                var test = noise(x/50,y/40,seed/90);
                if(test>0.425||test<0.4){
                    setWorld(x,y,20);
                }
            }
        }
        }else{
        for(var y = GL; y < GL+4; y++){
            if(fluid[getWorld(x,y)]){
                var test = noise(x/50,(GL+3)/40,seed/90);
                if(test>0.425||test<0.4){
                    setWorld(x,y,21);
                }
            }
        }
        }
        for(var y = 1; y < 4; y++){
            if(noise(seed*y/2,x)*9-y*0.5>3){
                setWorld(x,y,8);
            }
        }
        for(var y = GL+4; y < 61; y++){
            if(getWorld(x,y)===0||getWorld(x,y)===9){
                setWorld(x,y,9);
                if(y===60){
                    setWorldTag(x,60,{level:0,h1:1,h2:1,flow:15});
                }else{
                    setWorldTag(x,60,{level:0,h1:0,h2:0,flow:15});
                }
            }
        }
        if(GL>60){
        if(noise(seed*5,x/1.5)*11>6.3){
            setWorld(x,GL+3,3);
            var treeHeight = floor(noise(seed*3,x/3)*5+3);
            for(var i = 0; i < treeHeight; i++){
                setWorld(x,GL+4+i,6);
                setWorldType(x,GL+4+i,0);
            }
            for(var i = -2; i < 3; i++){
                for(var j = 0; j < 4; j++){
                    if(getWorld(i+x, GL+treeHeight+5-j)===0&&!(j===0&&abs(i)===2)){
                        setWorld(i+x, GL+treeHeight+5-j,7);
                        setWorldType(i+x, GL+treeHeight+5-j,0);
                    }
                }
            }
        }else if(noise(seed*3+2,x/1.5)*11>6.4){
            setWorld(x,GL+3,3);
            var treeHeight = floor(noise(seed*3,x/3)*5+3)+1;
            for(var i = 0; i < treeHeight; i++){
                setWorld(x,GL+4+i,6);
                setWorldType(x,GL+4+i,1);
            }
            for(var i = -1; i < 2; i++){
                for(var j = 0; j < 4; j++){
                    if(getWorld(i+x, GL+treeHeight+4-j)===0){
                        setWorld(i+x, GL+treeHeight+4-j,7);
                        setWorldType(i+x, GL+treeHeight+4-j,1);
                    }
                }
            }
            if(getWorld(x,GL+treeHeight+5)===0){
                setWorld(x,GL+treeHeight+5,7);
                setWorldType(x,GL+treeHeight+5,1);
            }
            if(getWorld(x-2,GL+treeHeight+3)===0){
                setWorld(x-2,GL+treeHeight+3,7);
                setWorldType(x-2,GL+treeHeight+3,1);
            }
            if(getWorld(x+2,GL+treeHeight+3)===0){
                setWorld(x+2,GL+treeHeight+3,7);
                setWorldType(x+2,GL+treeHeight+3,1);
            }
            if(getWorld(x-2,GL+treeHeight+1)===0){
                setWorld(x-2,GL+treeHeight+1,7);
                setWorldType(x-2,GL+treeHeight+1,1);
            }
            if(getWorld(x+2,GL+treeHeight+1)===0){
                setWorld(x+2,GL+treeHeight+1,7);
                setWorldType(x+2,GL+treeHeight+1,1);
            }
        }else if(noise(seed*6+1,x/1.5)*11>6.6){
            setWorld(x,GL+3,3);
            var treeHeight = floor(noise(seed*3,x/3)*5+3)+1;
            for(var i = 0; i < treeHeight; i++){
                setWorld(x,GL+4+i,6);
                setWorldType(x,GL+4+i,2);
            }
            for(var i = -2; i < 3; i++){
                for(var j = 0; j < 4; j++){
                    if(getWorld(i+x, GL+treeHeight+5-j)===0&&!(j===0&&abs(i)===2)){
                        setWorld(i+x, GL+treeHeight+5-j,7);
                        setWorldType(i+x, GL+treeHeight+5-j,2);
                    }
                }
            }
        }
        }
        if(floor(noise(seed/30,x/5)*10000)%16===0){
            var y = floor(noise(seed/34,x/12)*10000)%(min(groundLevel(x-3),groundLevel(x+3))-7)+10;
            for(var r = 0; r < 4; r++){
                for(var a = 0; a < 360; a+=10){
                    var xx = x+floor(r*cos(a)*1.3);
                    var yy = y+floor(r*sin(a)/2);
                    if(sin(a)<0){
                        setWorld(xx,yy,9);
                if(floor(r*sin(a)/2)===0){
                    setWorldTag(x,60,{level:0,h1:1,h2:1,flow:15});
                }else{
                    setWorldTag(x,60,{level:0,h1:0,h2:0,flow:15});
                }
                    }else{setWorld(xx,yy,0);}
                }
            }
        }
        if(floor(noise(seed/12,x/6)*10000)%32===0){
            var y = floor(noise(seed/37,x/22)*10000)%(min(groundLevel(x-3),groundLevel(x+3))-7)+10;
            for(var r = 0; r < 4; r++){
                for(var a = 0; a < 360; a+=10){
                    var xx = x+floor(r*cos(a));
                    var yy = y+floor(r*sin(a)/3);
                    if(sin(a)<0){
                        setWorld(xx,yy,10);
                if(floor(r*sin(a)/2)===0){
                    setWorldTag(x,60,{level:0,h1:1,h2:1,flow:120});
                }else{
                    setWorldTag(x,60,{level:0,h1:0,h2:0,flow:120});
                }
                    }else{setWorld(xx,yy,0);}
                }
            }
        }
    }
    for(var i = 0; i < noise(seed,c/6)*5; i++){
        var θ = random(0,360);
        var y = floor(noise(seed/73,i/23,c/16)*10000)%64;
        var x = floor(noise(seed/34,i/41,c/55)*10000)%16+c;
        for(var a = 0; a < 4; a++){
            for(var b = 0; b < 4; b++){
                var elX = round(x+a*cos(θ)-b*sin(θ));
                var elY = round(y+a*sin(θ)+b*cos(θ));
                if(getWorld(elX,elY)===1){
                    setWorld(elX,elY,3);
                }
            }
        }
    }
    for(var i = 0; i < noise(seed,c/6)*3; i++){
        var θ = random(0,360);
        var y = floor(noise(seed/13,i/43,c/56)*10000)%64;
        var x = floor(noise(seed/24,i/31,c/65)*10000)%16+c;
        for(var a = 0; a < 4; a++){
            for(var b = 0; b < 4; b++){
                var elX = round(x+a*cos(θ)-b*sin(θ));
                var elY = round(y+a*sin(θ)+b*cos(θ));
                if(getWorld(elX,elY)===1){
                    setWorld(elX,elY,21);
                }
            }
        }
    }
    if(floor(noise(seed/4,c/3)*10000)%3===0){
        var θ = random(0,360);
        var y = floor(noise(seed/2,c/4)*10000)%16;
        var x = floor(noise(seed/6,c/3)*10000)%16+c;
        for(var a = 0; a < 2; a++){
            for(var b = 0; b < 2; b++){
                var elX = round(x+a*cos(θ)-b*sin(θ));
                var elY = round(y+a*sin(θ)+b*cos(θ));
                if(getWorld(elX,elY)===1){
                    setWorld(elX,elY,16);
                }
            }
        }
    }
    var θ = random(0,360);
    var y = floor(noise(seed/5,c/2)*10000)%32;
    var x = floor(noise(seed/3,c/6)*10000)%16+c;
    for(var a = 0; a < 2; a++){
        for(var b = 0; b < 2; b++){
            var elX = round(x+a*cos(θ)-b*sin(θ));
            var elY = round(y+a*sin(θ)+b*cos(θ));
            if(getWorld(elX,elY)===1){
                setWorld(elX,elY,15);
            }
        }
    }
    for(var i = 0; i < noise(seed,c/3)*15; i++){
        var θ = random(0,360);
        var y = floor(noise(seed/6,i/9,c/6)*10000)%64;
        var x = floor(noise(seed/4,i/8,c/5)*10000)%16+c;
        for(var a = 0; a < 2; a++){
            for(var b = 0; b < 2; b++){
                var elX = round(x+a*cos(θ)-b*sin(θ));
                var elY = round(y+a*sin(θ)+b*cos(θ));
                if(getWorld(elX,elY)===1){
                    setWorld(elX,elY,14);
                }
            }
        }
    }
    for(var i = 0; i < noise(seed,c/7)*30; i++){
        var θ = random(0,360);
        var y = floor(noise(seed/3,i/9,c/3)*10000)%128;
        var x = floor(noise(seed/5,i/8,c/4)*10000)%16+c;
        for(var a = 0; a < 5; a++){
            for(var b = 0; b < 2; b++){
                var elX = round(x+a*cos(θ)-b*sin(θ));
                var elY = round(y+a*sin(θ)+b*cos(θ));
                if(getWorld(elX,elY)===1){
                    setWorld(elX,elY,13);
                }
            }
        }
    }
break;
case 1:
    for(var x = c; x < c+16; x++){
        for(var y = 127; y >= 0; y--){
            var leNoise = noise(y/15,x/50,seed/5)*sqrt((y-64)*(64-y) + 5096)*5;
            if(leNoise<150&&!getWorld(x,y)){
                setWorld(x,y,44);
                if(leNoise>140&&noise(y/28,x/31,seed/6)<0.43&&y<64&&y>28){
                    setWorld(x,y,45);
                }
            }else{
                if(y<31&&!getWorld(x,y)){
                    setWorld(x,y,10);
                    setWorldTag(x,y,{h1:y===30?1:0,h2:y===30?1:0,level:0,flow:15});
                }
            }
        }
        setWorld(x,0,8);
        setWorld(x,127,8);
        for(var y = 1; y < 4; y++){
            if(noise(seed*y/2,x)*9-y*0.5>3){
                setWorld(x,y,8);
                setWorld(x,127-y,8);
            }
        }
        for(var y = 31; y < 128; y++){
            if(floor(noise(seed/23,x/29,y/30)*10000)%10===0&&!getWorld(x,y)&&getWorld(x,y-1)===44){
                setWorld(x,y,18);
            }
            if(floor(noise(seed/27,x/31,y/39)*10000)%40===0&&!getWorld(x,y)&&getWorld(x,y+1)===44){
                for(var i = 0; i < 360; i+=45){
                    var a = i+floor(noise(seed/35,y/39,x/37)*10000)%45;
                    for(var r = 0; r < 4; r++){
                        var xx = x+floor(r*cos(a));
                        var yy = y+floor(r*sin(a));
                        if(!getWorld(xx,yy)){
                            setWorld(xx,yy,46);
                        }
                    }
                }
            }
        }
    }
break;
    }
    updateLight(c);
};
genChunk(0);
var keys = [];
keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};
var pHealth = 20;
var destroy = function(x,y,tool){
    if(tool!==false&&harvest[getWorld(x,y)]){
        var table = harvest[getWorld(x,y)][getWorldType(x,y)];
        if(table.drops){
        for(var i = 0; i < table.drops.length; i++){
            if(random(0,1)<table.odds[i]){
                var count = 1;
                if(table.count){
                    count = floor(random(table.count[i][0],table.count[i][1]+1));
                }
                var θ = random(0,180);
                var newItem = new Item(table.drops[i].id,table.drops[i].count*count,table.drops[i].type,table.drops[i].tag?defaultTag(table.drops[i].id,table.drops[i].type):table.drops[i].tag);
                spawnEntity(new Entity("item",x*40+10,y*40+10,{life:90,item:newItem,health:1}));
                entities.getValAt(entities.length-1).mx = cos(θ);
                entities.getValAt(entities.length-1).my = sin(θ);
            }
        }
        }
    }
    if(getWorldTag(x,y).contents){
        var container = getWorldTag(x,y).contents;
        for(var i = 0; i < container.length; i++){
            if(container[i].id!==0){
            var θ = random(0,180);
            spawnEntity(new Entity("item",x*40+10,y*40+10,{life:90,item:container[i],health:1}));
            entities.getValAt(entities.length-1).mx = cos(θ);
            entities.getValAt(entities.length-1).my = sin(θ);
            }
        }
    }
    if(blockColor[getWorld(x,y)]){
        for(var i = 0; i < 5; i++){
            var θ = random(0,180);
            spawnEntity(new Entity("p_crumb",x*40+15+cos(θ)*10,y*40+15+sin(θ)*10,{life:60,block:{id:getWorld(x,y),type:getWorldType(x,y)},health:1}));
            entities.getValAt(entities.length-1).mx = cos(θ)*3;
            entities.getValAt(entities.length-1).my = sin(θ)*3;
        }
    }
    setWorld(x,y,0);
    setWorldType(x,y,0);
    setWorldTag(x,y,{});
};
var explode = function(x,y,r){
    var blownUp = [];
    for(var ent = entities.head; ent.next; ent = ent.next){
        var entity = ent.val;
        var d = dist(x,y,entity.x,entity.y);
        if(d<r*50){
            var θ = atan2(entity.y-y,entity.x-x);
            entity.mx+=cos(θ)*r*50/d;
            entity.my+=sin(θ)*r*50/d;
            if(!invuln(entity.id)&&!entity.noClip){
                entity.tag.health-=(r*40-d)/5;
            }
        }
    }
    for(var i = 0; i < 20; i++){
        var θ = i*18+random(-10,10);
        var rad = random(0,r);
        spawnEntity(new Entity("p_smoke",x+cos(θ)*rad*16,y+sin(θ)*rad*16,{life:70,health:1}));
        entities.getValAt(entities.length-1).mx = cos(θ)*rad;
        entities.getValAt(entities.length-1).my = sin(θ)*rad;
    }
    for(var i = 0; i < r*r/3; i++){
        var θ = i*360/(r*r/3);
        var rad = sqrt(random(0,r*r))*30;
        spawnEntity(new Entity("p_shock",x+cos(θ)*rad,y+sin(θ)*rad,{life:random(10,30),health:1}));
    }
    for(var i = 0; i < 360; i+=2){
        var power = r*10;
        for(var j = 0; j < r; j++){
            var xx = floor(x/40+cos(i)*j);
            var yy = floor(y/40+sin(i)*j);
            if(!blownUp[xx]){
                blownUp[xx] = [];
            }
            if(!blownUp[xx][yy]){
                blownUp[xx][yy] = hardness[getWorld(xx,yy)];
            }
            if(getWorld(xx,yy)===9||hardness[getWorld(xx,yy)]>2000){
                j = r;
            }
            if(blownUp[xx][yy]>0){
                blownUp[xx][yy]-=20;
                power-=60;
                if(power<=0){
                    j = r;
                }
                if(blownUp[xx][yy]<=0){
                    if(getWorld(xx,yy)===12){
                        var a = atan2(yy-y,xx-x);
                        spawnEntity(new Entity("tnt",xx*40,yy*40,{fuse:31}));
        entities.getValAt(entities.length-1).mx = cos(a)*5;
        entities.getValAt(entities.length-1).my = sin(a)*5;
                    }else if(!floor(random(0,3))&&harvest[getWorld(xx,yy)]){
        var table = harvest[getWorld(xx,yy)][getWorldType(xx,yy)];
        if(table.drops){
        for(var i = 0; i < table.drops.length; i++){
            if(random(0,1)<table.odds[i]){
                var count = 1;
                if(table.count){
                    count = floor(random(table.count[i][0],table.count[i][1]+1));
                }
                var θ = random(0,180);
                var newItem = new Item(table.drops[i].id,table.drops[i].count*count,table.drops[i].type,table.drops[i].tag?defaultTag(table.drops[i].id,table.drops[i].type):table.drops[i].tag);
                spawnEntity(new Entity("item",xx*40+10,yy*40+10,{life:90,item:newItem,health:1}));
                entities.getValAt(entities.length-1).mx = cos(θ);
                entities.getValAt(entities.length-1).my = sin(θ);
            }
        }
        }
    if(getWorldTag(xx,yy).contents){
        var container = getWorldTag(xx,yy).contents;
        for(var i = 0; i < container.length; i++){
            if(container[i].id!==0){
            var θ = random(0,180);
            spawnEntity(new Entity("item",xx*40+10,yy*40+10,{life:90,item:container[i],health:1}));
            entities.getValAt(entities.length-1).mx = cos(θ);
            entities.getValAt(entities.length-1).my = sin(θ);
            }
        }
    }
    }
                    setWorld(xx,yy,0);
                    j = r;
                }
            }
        }
    }
};
var give = function(player,item,iter,s1,s2){
    if(iter===undefined){
        iter = 0;
    }
    var prefix = "";
    for(var i = 0; i < iter; i++){prefix = prefix+"|";}
    //println(prefix+"Giving "+player.id+" "+blockName[item.id][item.type]+" x"+item.count);
    var count = 0;
    while(item.count>maxStax[item.id]){
        //println(prefix+"/OVERFLOW");
        count = count+give(player,new Item(item.id,maxStax[item.id],item.type,item.tag),iter+1);
        item.count-=maxStax[item.id];
        //println(prefix+"\\COUNT: "+count);
    }
    var inv = player.tag.inventory;
    for(var i = 0; i < inv.length; i++){
        for(var j = 0; j < inv[i].length; j++){
            if(inv[i][j].id===item.id&&inv[i][j].type===item.type&&inv[i][j].count<maxStax[item.id]){
                //println(prefix+"/ADD TO STACK");
                var c = inv[i][j].count+item.count;
                if(c>maxStax[item.id]){
                    inv[i][j].count = maxStax[item.id];
                    count += item.count-give(player,new Item(inv[i][j].id,c-maxStax[item.id],inv[i][j].type,inv[i][j].tag),iter+1);
                }else{
                    inv[i][j] = item;
                    inv[i][j].count = c;
                    count += c;
                }
                //println(prefix+"\\COUNT: "+count);
                return count;
            }
        }
    }
    for(var i = 0; i < inv.length; i++){
        for(var j = 0; j < inv[i].length; j++){
            if(inv[i][j].id===0){
                //println(prefix+"/ADD TO EMPTY");
                inv[i][j] = item;
                count+=item.count;
                //println(prefix+"\\COUNT: "+count);
                return count;
            }
        }
    }
    return 0;
};
var fullInv = function(inv,item){
    var count = 0;
    for(var i = 0; i < inv.length; i++){
        for(var j = 0; j < inv[i].length; j++){
            if(inv[i][j].id===item.id&&inv[i][j].type===item.type&&inv[i][j].tag===item.tag&&inv[i][j].count<maxStax[item.id]){
                //println(prefix+"/ADD TO STACK");
                var c = inv[i][j].count+item.count;
                if(c>maxStax[item.id]){
                    count += item.count-fullInv(inv,new Item(inv[i][j].id,c-maxStax[item.id],inv[i][j].type,inv[i][j].tag));
                }
                //println(prefix+"\\COUNT: "+count);
                return false;
            }
        }
    }
    for(var i = 0; i < inv.length; i++){
        for(var j = 0; j < inv[i].length; j++){
            if(inv[i][j].id===0){
                //println(prefix+"/ADD TO EMPTY");
                count+=item.count;
                //println(prefix+"\\COUNT: "+count);
                return false;
            }
        }
    }
    return true;
};
var anim = 100;
var logo = [
    [[1,0,0,0,1],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]],
    [[1],[1],[1],[1],[1]],
    [[1,0,0,1],
    [1,1,0,1],
    [1,0,1,1],
    [1,0,0,1],
    [1,0,0,1]],
    [[1,1,1,1],
    [1,0,0,0],
    [1,1,1,0],
    [1,0,0,0],
    [1,1,1,1]],
    [[0,1,1,1],
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
    [0,1,1,1]],
    [[1,1,1,0],
    [1,0,0,1],
    [1,1,1,0],
    [1,0,0,1],
    [1,0,0,1]],
    [[0,1,1,0],
    [1,0,0,1],
    [1,1,1,1],
    [1,0,0,1],
    [1,0,0,1]],
    [[1,1,1,1],
    [1,0,0,0],
    [1,1,1,0],
    [1,0,0,0],
    [1,0,0,0]],
    [[1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]],
    [[0,1,1,0],
    [1,0,0,1],
    [0,0,1,0],
    [0,1,0,0],
    [1,1,1,1]]
    ];
var logpos = [];
var corpos = [];
var curwid = 0;
var index = 0;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < logo[i].length; j++){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [j*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var i = 5; i < 9; i++){
    for(var j = logo[i].length-1; j >= 0; j--){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [(curwid+k)*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var j = 0; j < logo[9].length; j++){
    for(var k = logo[9][j].length-1; k >= 0; k--){
        if(logo[9][j][k]){
            logpos[index] = [k*10+190,(1000*(1+9*j*j+k*k*3))];
            corpos[index] = [k*10+190,j*10];
            index++;
        }
    }
}
var f = [];
var mX,mY;
var pkeys = [];
var selSlab;
var pselSlab;
var button = function(txt,x,y,w,h,f1,f2,o){
    noStroke();
    fill(150);
    textSize(min(w,h)-10);
    textAlign(CENTER,CENTER);
    if(mX>=x&&mX<=x+w&&mY>=y&&mY<=y+h&&!o){
        if(mouseDown){
            if(mouseButton===RIGHT){
                f[f2] = true;
            }
            if(mouseButton===LEFT){
                f[f1] = true;
            }
            fill(150);
            quad(x+w,y,x+w+5,y-5,x+w+5,y+h+5,x+w,y+h);
            quad(x+w,y+h,x,y+h,x-5,y+h+5,x+w+5,y+h+5);
            fill(50);
            quad(x,y,x+w,y,x+w+5,y-5,x-5,y-5);
            quad(x,y,x,y+h,x-5,y+h+5,x-5,y-5);
            fill(100);
        }else{
            fill(100,100,150);
            quad(x+w,y,x+w+5,y-5,x+w+5,y+h+5,x+w,y+h);
            quad(x+w,y+h,x,y+h,x-5,y+h+5,x+w+5,y+h+5);
            fill(200,200,255);
            quad(x,y,x+w,y,x+w+5,y-5,x-5,y-5);
            quad(x,y,x,y+h,x-5,y+h+5,x-5,y-5);
            fill(150,150,200);
        }
    }else if(o){
        fill(150);
        quad(x+w,y,x+w+5,y-5,x+w+5,y+h+5,x+w,y+h);
        quad(x+w,y+h,x,y+h,x-5,y+h+5,x+w+5,y+h+5);
        fill(50);
        quad(x,y,x+w,y,x+w+5,y-5,x-5,y-5);
        quad(x,y,x,y+h,x-5,y+h+5,x-5,y-5);
        fill(100);
    }else{
        fill(100);
        quad(x+w,y,x+w+5,y-5,x+w+5,y+h+5,x+w,y+h);
        quad(x+w,y+h,x,y+h,x-5,y+h+5,x+w+5,y+h+5);
        fill(200);
        quad(x,y,x+w,y,x+w+5,y-5,x-5,y-5);
        quad(x,y,x,y+h,x-5,y+h+5,x-5,y-5);
        fill(150);
    }
    rect(x,y,w,h);
    fill(0,0,0,100);
    text(txt,x+w/2+1,y+h/2+1);
    fill(255);
    text(txt,x+w/2-1,y+h/2-1);
};
var splashes = [
    "Unleashed!",
    "About time!",
    "About blocks!",
    "How do I make a pickaxe?",
    "99.9% less endermen!",
    "Absolutely WebGL free!",
    "Now with standards!",
    "Not the 3D one!",
    "Not the good one!",
    "Not the bad one!",
    "Smelting TNT!",
    "On Youtube!",
    "We're #2!",
    floor(random(0,100))/10+" billion served!",
    "Sponsored by Copy/Paste!",
    "Don't go up!",
    "Oh noes!",
    "Don't press 0!",
    "In MC1, water exists as a quantum superposition, where it both exists and doesn't exist at the same time. Thus, it's possible to drown in it while not quenching your flames.",
    "Sponsored by the Votes List!",
    "Bonjour, France!",
    "¡Hola, España!",
    "Привет, Россия!",
    "中国你好!",
    "0101100101101111!",
    "The bugs have taken over!",
    "Electric Boogaloo!",
    "and the Chamber of Secrets!",
    "Runs on dreams!",
    "Runs on lava!",
    "Click here for free diamonds!",
    "Zombies inside your house!",
    "Vertical Slabs!",
    "We're in the Endgame Now!",
    "I believe he's tooling with you, sir!",
    "Itsh Karandras!",
    "Yrandorskyandana, sat vreiras dyr anskyrondat!",
    "Itsh Adoras rt inst yt fwt yera!",
    "Nether have I ever!",
    "Nether say Nether!",
    "Don't play in school!",
    "Crashing in 5 seconds...",
    "Майнкрафт",
    "我的世界",
    "Μαινκραφτ",
    "+           ",
    ".com        "
];
var curSplash = floor(random(0,splashes.length));
var armSwung = false;
mousePressed = function(){
    mouseDown = true;
    if(keys[17]||keys[91]){
        mouseButton = RIGHT;
    }
};
mouseReleased = function(){
    mouseDown = false;
};
var hostileCount = [0,0];
var toPsp = 1;
var exhaust = 0;
var pExhaust = 0;
var hongShake = 0;
give(entities.head.val,new Item(19,14,0));
give(entities.head.val,new Item(18,1,0));
entities.head.val.tag.inventory[0][1].tag.durability = 1;
draw = function() {
    var elNumber = entities.length;
    for(var i = 0; i < 20; i++){
        fire[0][i] = min(-noise(i/2.5,frameCount/50,0)*60+pow((i-10)/3,2),0);
        fire[1][i] = min(-noise(i/2.5,frameCount/50,1)*60+pow((i-10)/2,2)+4,0);
        fire[2][i] = min(-noise(i/2.5,frameCount/50,2)*60+pow((i-10)/1.5,2)+12,0);
    }
    if(menu==="logo"){
        noStroke();
        if(anim>0){
        var rot = pow(2,(anim-30)/8.2);
        background(0);
        translate(width/2,height/2-50);
        fill(255);
        ellipse(0,0,450,370);
        fill(0);
        ellipse(0,-240,700,800);
        fill(255);
        scale(sin(rot+90),1);
        ellipse(0,0,280,280);
        fill(0);
        ellipse(0,100,115,115);
        ellipse(0,0,160,160);
        triangle(0,0,200,-200,-200,-200);
        fill(255);
        scale(1/sin(rot+90),1);
        ellipse(0,100,95,95);
        bezier(0,-150,-55,-100,-55,-5,0,40);
        bezier(0,-150,55,-100,55,-5,0,40);
        fill(255,255,255,500-(anim*6));
        textAlign(CENTER,CENTER);
        textSize(50);
        text("Bennimus Studios",0,230);
        resetMatrix();
        if(anim<=30){
            fill(0,0,0,(30-anim)*51/6);
            rect(0,0,width,height);
        }
        anim--;
        }else{
            menu="title";
            anim = 30;
        }
    }else if(menu==="title"){
        var θ1 = 45;
        var θ2 = 35;
        cx = cos(θ1);
        cy = cos(θ2);
        sx = sin(θ1);
        sy = sin(θ2);
        psp = 6000;
        background(0);
        scale(2,2);
        translate(0,frameCount/5);
        var scrl = ceil(frameCount/260);
        translate(0,-52*scrl);
        if(scrl&1){
            translate(30,0);
        }
        for(var j = -scrl; j < 7-scrl; j++){
            if(j&1){
                translate(-60,0);
            }
            for(var i = 0; i < 6; i++){
                var id = (floor(noise(i/10,j/10)*1000)%(blockName.length-1))+1;
                id = id%4+43;
                if(id>32&&id<36){id-=3;}
                var type = (floor(noise(i/3,j/3)*1000)%blockName[id].length);
                if(id===12){type=0;}
                drawBlock(id,0,0,[0,0,1,1],type,{
                    h1:1,h2:1,
                    horizontal:floor(noise(i/0.7,j/0.8)*1000)&1,
                    wall:(floor(noise(i/2,j/2)*1000)&1)*2,
                    a: floor(noise(i/3,j/4)*2000)%3+29,
                    b: floor(noise(i/5,j/3)*2503)%3+29,
                    at: floor(noise(i/3,j/3)*1000)%blockName[floor(noise(i/3,j/4)*2000)%3+29].length,
                    bt: floor(noise(i/3.5,j/3.7)*1000)%blockName[floor(noise(i/5,j/3)*2503)%3+29].length,
                    top:false,open:false,align:LEFT
                });
                if(id===44&&floor(noise(i/3,j/3)*1000)%3===0){
                    drawBlock(18,0,-40,[0,0,1,1],0);
                }
                if(id===42){
                    drawBlock(id,0,-40,[0,0,1,1],type,{open:false,top:true,align:LEFT});
                }
                translate(60,0);
            }
            translate(-330,52);
        }
        resetMatrix();
        fill(0,0,0,150);
        rect(0,0,width,height);
        translate(width/2,30);
        cy = cos(-20);
        sy = sin(-20);
        cx = 1;
        sx = 0;
        psp = 1200;
        scale(0.25,0.25);
        for(var i = 0; i < 52; i++){
            logpos[i][0] += (corpos[i][0]-logpos[i][0])/5;
            logpos[i][1] += (corpos[i][1]-logpos[i][1])/5;
            fill(255, 0, 0);
            textSize(10);
            var wid = curwid*19.5;
            if(logpos[i][1]<400){
                drawBlock(44,logpos[i][0]*4-wid,logpos[i][1]*4,[0,1,0,0]);
            }
        }
        for(var i = 94; i >= 52; i--){
            logpos[i][0] += (corpos[i][0]-logpos[i][0])/5;
            logpos[i][1] += (corpos[i][1]-logpos[i][1])/5;
            fill(255, 0, 0);
            textSize(10);
            var wid = curwid*19.5;
            if(logpos[i][1]<400){
                drawBlock(44,logpos[i][0]*4-wid,logpos[i][1]*4,[0,0,0,1]);
            }
        }
        cy = cos(20);
        sy = sin(20);
        translate(0,250);
        scale(1.5,1.5);
        if(anim<=0){
            for(var i = logpos.length-1; i > 94; i--){
                fill(255, 0, 0);
                textSize(10);
                var wid = curwid*19.1;
                logpos[i][0] += (corpos[i][0]-logpos[i][0])/5;
                logpos[i][1] += (corpos[i][1]-logpos[i][1])/5;
                drawBlock(46,logpos[i][0]*4-wid,logpos[i][1]*4,[0,1,1,1]);
            }
        }else{
            anim--;
        }
        sX = 0;
        sY = 0;
        psp = (width+height)/2;
        resetMatrix();
        translate(450,100);
        rotate(-15);
        textSize(400/splashes[curSplash].length);
        textAlign(CENTER,CENTER);
        fill(122, 122, 80);
        if(curSplash===23||curSplash===43){
            scale(0.5); //The Chinese ones don't calculate right
        }
        scale(pow((frameCount/1.7)%20-10,2)/450+1);
        text(splashes[curSplash],1,1);
        fill(255, 255, 150);
        text(splashes[curSplash],-1,-1);
        resetMatrix();
        translate(width/2,200);
        mX = mouseX-width/2;
        mY = mouseY-200;
        button("Play",-150,0,300,40,0,0);
        button("About",-150,60,300,40,1,1);
        button("Options",-150,120,300,40,2,2,true);
        resetMatrix();
        if(f[0]){
            f[0] = false;
            menu="game";
            sY = 128*40;
            yRot = 45;
            mouseIsPressed = false;
            curSplash = floor(random(0,splashes.length));
        }
        if(f[1]){
            f[1] = false;
            menu="about";
            mouseIsPressed = false;
        }
        fill(255);
        textSize(20);
        textAlign(LEFT,BOTTOM);
        text("Version "+version+"\nBennimus Studios",20,height-20);
    }else if(menu==="about"){
        background(66, 23, 1);
        translate(width/2,50);
        textSize(80);
        textAlign(CENTER,CENTER);
        text("About",0,0);
        translate(0,50);
        textSize(15);
        textAlign(LEFT,TOP);
        text("\"Minecraft\" on Khan Academy was the most successful thing I've ever created on the site. Many people have said it's \"The best game ever\" and that the coding was \"amazing\". Though I am quite flattered by having programmed the most spun-off program on the site, I would like to point out one simple truth.\n\nIt's... not that great.\n\nIn a lot of ways \"Minecraft\" was just an excuse for a 12-year-old to see what was possible while learning about the features of processing.js, and it was nowhere near \"good\". That being said, I'm no longer 12, and I understand more techniques, such as linked lists and transformation matrices, which will make programming, running, and playing the game much faster and much more smooth.\n\nWith this in mind, I've decided to begin work on a reimagined sequel to an old classic. While my account is being unbanned (how did that happen I literally did nothing in the past year) please enjoy what I've been working so far. As this game is in development, PLEASE report all issues you find. I can't reply quite yet, so please be patient.",-250,0,500,500);
        resetMatrix();
        mX = mouseX;
        mY = mouseY;
        button("Back",20,20,150,50,0,0);
        if(f[0]){
            menu="title";
            f[0] = false;
        }
    }else{
    stages[0] = millis();
    cx = cos(min(xRot+mxRot,rx));
    cy = cos(min(yRot+myRot,rx));
    sx = -sin(min(xRot+mxRot,ry));
    sy = sin(min(yRot+myRot,ry));
    textAlign(CENTER,CENTER);
    textFont(createFont("Trebuchet MS",12),12);
    mX = mouseX-width/2;
    mY = mouseY-height/2;
    var corX = mX*mX/(X3D(mX,mY,13)?X3D(mX,mY,13):1)-sX;
    var corY = -mY*mY/(Y3D(mX,mY,13)?Y3D(mX,mY,13):1)+sY;
    var selX = floor(corX/40);
    var selY = floor(corY/40)+1;
    var selEntity = null;
    cantplace = selY<0||selY>127;
    var player = entities.head.val;
    player.dimension = dimension;
    var hp = ceil(player.tag.health);
    if(hp<0){hp=0;}
    translate(width/2,height/2);
    var hong;
    var dangle = daytime*360/24000;
    var dlight = max(min(15,sin(dangle)*10+12),4);
    background(dlight*10, dlight*13, 50+dlight*13);
    if(menu!=="pause"){
    if(pHealth!==hp){
        pHealth+=(hp-pHealth)/10;
        pHealth = floor(pHealth*100)/100;
        if(pHealth>hp){
            rotate(pHealth*2-hp*2);
        }
    }
    if(exhaust>=4){
        exhaust-=4;
        if(player.tag.saturation>0){
            player.tag.saturation--;
        }else if(player.tag.hunger>0){
            player.tag.hunger--;
        }
    }
    if(floor(exhaust)!==floor(pExhaust)&&player.tag.saturation<=0){
        hongShake = 9;
    }
    pExhaust = exhaust;
    if(player.tag.hunger>20){
        player.tag.hunger = 20;
    }
    var hong = player.tag.hunger;
    if(player.tag.health>0){
    if(hong<0){hong = 0;}
    if(sprintTimer>0){
        sprintTimer--;
    }if(sprintTimer<0){
        sprintTimer++;
    }
    if(player.tag.health<20){
        if((hong===20&&player.tag.saturation>0&&frameCount%30===0)||(hong>17&&frameCount%240===0)){
            player.tag.health++;
            exhaust+=6;
        }
    }
    }
    distortion = floor(distortion*400)/400;
    if(distortion<toDistort){
        distortion+=0.005;
    }else if(distortion>toDistort){
        if(distortion<=0.01){
            distortion = 0;
        }else{
            distortion-=0.01;
        }
    }
    if(distortion){
        rotate(frameCount*7);
        scale(1,distortion+1);
        rotate(-frameCount*7);
    }
    if(menu==="game"){
    player.direction = atan2(corY-player.y-25,corX-player.x-16);
    }
    var elNode = entities.head;
    var pChunk = floor(player.x/640);
    if(!chunksGenerated[dimension][pChunk+1]){
        genChunk(pChunk+1);
        chunksGenerated[dimension][pChunk+1] = true;
    }
    if(!chunksGenerated[dimension][pChunk]){
        genChunk(pChunk);
        chunksGenerated[dimension][pChunk] = true;
    }
    if(!chunksGenerated[dimension][pChunk-1]){
        genChunk(pChunk-1);
        chunksGenerated[dimension][pChunk-1] = true;
    }
    stages[1] = millis();
    var a = floor(player.x/40),b = floor(player.y/40);
    daylight = floor(dlight);
    daytime++;
    if(daytime>24000){daytime = 0;}
    if(daylight!==pdl){lightUpdated = false;}
    pdl = daylight;
    updateLight(a);
    stages[2] = millis();
    if(!curItem.id){
        curItem = new Item(0,0,0);
    }
    for(var x = a-24; x < a+24; x++){
        for(var y = min(b+24,127); y >= max(b-24,0); y--){
        if(dimension===0){
            if(dist(x,y,player.x/40,player.y/40)>15&&dist(x,y,player.x/40,player.y/40)<50&&getWorld(x,y)!==9&&!floor(random(0,pow(3,hostileCount[dimension])))&&getLight(x,y)<=7&&solid[getWorld(x,y-1)]&&!solid[getWorld(x,y)]&&!solid[getWorld(x,y+1)]){
spawnEntity(new Entity("zombie",x*40+8,y*40,{
        speed: 1,
        inventory: [new Item(0,0)],
        health: 20,
        air: 20,
        direction: 0,
        target: 0
    }));
            }if(dist(x,y,player.x/40,player.y/40)>15&&dist(x,y,player.x/40,player.y/40)<50&&getWorld(x,y)!==9&&!floor(random(0,pow(3,hostileCount[dimension])))&&getLight(x,y)<=7&&solid[getWorld(x,y-1)]&&!solid[getWorld(x,y)]&&!solid[getWorld(x,y+1)]){
spawnEntity(new Entity("creeper",x*40+8,y*40,{
        speed: 1,
        health: 20,
        air: 20,
        direction: 0,
        target: 0
    }));
            }
        }
            if(falls[getWorld(x,y)]&&!solid[getWorld(x,y-1)]){
                spawnEntity(new Entity("sand",x*40,y*40,{block:{id:getWorld(x,y),type:getWorldType(x,y),tag:getWorldTag(x,y)}}));
                setWorld(x,y,0);
                setWorldTag(x,y,0);
                setWorldType(x,y,0);
            }
            switch(getWorld(x,y)){
                case 0:
                    setWorldType(x,y,0);
                    setWorldTag(x,y,{});
                    break;
                case 2:
                    if(!floor(round(random(0,600)))&&opaque[getWorld(x,y+1)]>1){
                        setWorld(x,y,3);
                    }
                    break;
                case 3:
                    if(!round(random(0,300))&&opaque[getWorld(x,y+1)]===0&&getWorld(x,y+1)!==9&&getWorld(x,y+1)!==10){
                        var foundGrass = false;
                        for(var i = -1; i < 1; i++){
                            for(var j = -3; j < 1; j++){
                                if(getWorld(x+i,y+j)===2&&getLight(x+i,y+j+1)>=9){
                                    setWorld(x,y,2);
                                }
                            }
                        }
                    }
                    break;
                case 9:
                    if(dimension===1){
                        getWorldTag(x,y).flow = -1;
                        setWorld(x,y,0);
        for(var i = 0; i < 5; i++){
            var elX = x*40+20,elY = y*40+20;
            var θ = i*72+random(-30,30);
            spawnEntity(new Entity("p_smoke",elX+cos(θ)*10,elY+sin(θ)*10,{life:60,health:1}));
            var r = random(2,3);
            entities.getValAt(entities.length-1).mx = cos(θ)/r;
            entities.getValAt(entities.length-1).my = sin(θ)/r;
        }
                    }
                    if(!getWorldTag(x,y)){
                        setWorldTag(x,y,{level:0,flow:15,h1:1,h2:1});
                    }
                    var water = getWorldTag(x,y);
                    if(water.flow===0){
                        var up = getWorld(x,y+1);
                        var down = getWorld(x,y-1);
                        var left = getWorld(x-1,y);
                        var right = getWorld(x+1,y);
                        var uptag = getWorldTag(x,y+1);
                        var downtag = getWorldTag(x,y-1);
                        var lefttag = getWorldTag(x-1,y);
                        var righttag = getWorldTag(x+1,y);
                        if(left===10){
                            if(lefttag.level===0){
                                setWorld(x-1,y,19);
                                left = 19;
                            }else{
                                setWorld(x-1,y,4);
                                left = 4;
                            }
                        }
                        if(right===10){
                            if(lefttag.level===0){
                                setWorld(x+1,y,19);
                                right = 19;
                            }else{
                                setWorld(x+1,y,4);
                                right = 4;
                            }
                        }
                        if(down===10){
                            if(downtag.level===0){
                                setWorld(x,y-1,19);
                                down = 19;
                            }else{
                                setWorld(x,y-1,4);
                                down = 4;
                            }
                        }
                        if(water.level===0){ //Source block
                            if(up===9){
                                water.h1 = 0;
                                water.h2 = 0;
                            }else{
                                water.h1 = 1;
                                water.h2 = 1;
                            }
                            if(!solid[left]&&(left!==9||lefttag.level<7)&&!(left===9&&lefttag.level===0)){
                                destroy(x-1,y);
                                setWorld(x-1,y,9);
                                setWorldTag(x-1,y,{level:7,flow:15,h1:2,h2:water.h1});
                            }
                            if(!solid[right]&&(right!==9||righttag.level<7)&&!(right===9&&righttag.level===0)){
                                destroy(x+1,y);
                                setWorld(x+1,y,9);
                                setWorldTag(x+1,y,{level:7,flow:15,h1:water.h2,h2:2});
                            }
                        }else{
                            if(!solid[left]&&solid[down]&&(left!==9||(lefttag.level<water.level-1&&lefttag.level!==0))&&water.level>1){
                                if(left!==9){
                                    destroy(x-1,y);
                                    setWorld(x-1,y,9);
                                }
                                setWorldTag(x-1,y,{level:water.level-1,flow:15,h1:10-water.level,h2:water.h1});
                            }
                            if(!solid[right]&&solid[down]&&(right!==9||(righttag.level<water.level-1&&righttag.level!==0))&&water.level>1){
                                if(right!==9){
                                    destroy(x+1,y);
                                    setWorld(x+1,y,9);
                                }
                                setWorldTag(x+1,y,{level:water.level-1,flow:15,h1:water.h2,h2:10-water.level});
                            }
                            if(water.level===8&&up!==9){
                                water.level--;
                            }
                            if(water.level<8&&(left!==9||lefttag.level<=water.level)&&(right!==9||righttag.level<=water.level)&&lefttag.level!==0&&righttag.level!==0){
                                water.level--;
                                if(water.h1===water.h2){
                                    water.h1++;
                                    water.h2++;
                                }else{
                                    water.h1=max(water.h1,water.h2);
                                    water.h2=max(water.h1,water.h2);
                                }
                                if(water.level===0||(right!==9&&left!==9&&up!==9)){
                                    setWorld(x,y,0);
                                }
                            }
                        }
                        if(left===9&&lefttag.level===8){
                            water.h1=0;
                        }
                        if(right===9&&righttag.level===8){
                            water.h2=0;
                        }
                        if(!solid[down]&&!(down===9&&downtag.level===0)){
                            if(down!==9){
                                destroy(x,y-1);
                                setWorld(x,y-1,9);
                            }
                            setWorldTag(x,y-1,{level:8,flow:15,h1:0,h2:0});
                        }
                        if(right===9&&left===9&&righttag.level===lefttag.level&&up!==9){
                            water.h1 = lefttag.h2;
                            water.h2 = righttag.h1;
                            if(water.level===7&&solid[down]){
                                water.level=0;
                            }
                        }
                        water.flow = 15;
                        setWorldTag(x,y,water);
                    }else{
                        getWorldTag(x,y).flow--;
                    }
                    break;
                case 10:
                    if(!getWorldTag(x,y)){
                        setWorldTag(x,y,{level:0,flow:120,h1:1,h2:1});
                    }
                    var water = getWorldTag(x,y);
                    if(water.flow===0){
                        var up = getWorld(x,y+1);
                        var down = getWorld(x,y-1);
                        var left = getWorld(x-1,y);
                        var right = getWorld(x+1,y);
                        var uptag = getWorldTag(x,y+1);
                        var downtag = getWorldTag(x,y-1);
                        var lefttag = getWorldTag(x-1,y);
                        var righttag = getWorldTag(x+1,y);
                        if(left===9){
                            setWorld(x-1,y,4);
                            left = 4;
                        }
                        if(right===9){
                            setWorld(x+1,y,4);
                            right = 4;
                        }
                        if(down===9){
                            setWorld(x,y-1,1);
                            down = 1;
                        }
                        if(water.level===0){ //Source block
                            if(up===10){
                                water.h1 = 0;
                                water.h2 = 0;
                            }else{
                                water.h1 = 1;
                                water.h2 = 1;
                            }
                            if(!solid[left]&&(left!==10||lefttag.level<7)&&!(left===10&&lefttag.level===0)){
                                setWorld(x-1,y,10);
                                setWorldTag(x-1,y,{level:6,flow:120,h1:3,h2:water.h1});
                            }
                            if(!solid[right]&&(right!==10||righttag.level<7)&&!(right===10&&righttag.level===0)){
                                setWorld(x+1,y,10);
                                setWorldTag(x+1,y,{level:6,flow:120,h1:water.h2,h2:3});
                            }
                        }else{
                            if(!solid[left]&&solid[down]&&(left!==10||(lefttag.level<water.level-1&&lefttag.level!==0))&&water.level>2){
                                setWorld(x-1,y,10);
                                setWorldTag(x-1,y,{level:water.level-2,flow:120,h1:11-water.level,h2:water.h1});
                            }
                            if(!solid[right]&&solid[down]&&(right!==10||(righttag.level<water.level-1&&righttag.level!==0))&&water.level>2){
                                setWorld(x+1,y,10);
                                setWorldTag(x+1,y,{level:water.level-2,flow:120,h1:water.h2,h2:11-water.level});
                            }
                            if(water.level===8&&up!==10){
                                water.level--;
                                water.h1++;
                                water.h2++;
                            }
                            if(water.level<8&&(left!==10||lefttag.level<=water.level)&&(right!==10||righttag.level<=water.level)&&lefttag.level!==0&&righttag.level!==0){
                                water.level--;
                                if(water.h1===water.h2){
                                    water.h1++;
                                    water.h2++;
                                }else{
                                    water.h1=max(water.h1,water.h2);
                                    water.h2=max(water.h1,water.h2);
                                }
                                if(water.level===0){
                                    setWorld(x,y,0);
                                }
                            }
                        }
                        if(left===9&&lefttag.level===8){
                            water.h1=0;
                        }
                        if(right===9&&righttag.level===8){
                            water.h2=0;
                        }
                        if(!solid[down]&&!(down===10&&downtag.level===0)){
                            setWorld(x,y-1,10);
                            setWorldTag(x,y-1,{level:8,flow:120,h1:0,h2:0});
                        }
                        if(right===10&&left===10&&righttag.level===lefttag.level&&up!==10){
                            water.h1 = lefttag.h2;
                            water.h2 = righttag.h1;
                            
                        }
                        water.flow = 120;
                        setWorldTag(x,y,water);
                    }else{
                        getWorldTag(x,y).flow--;
                    }
                    break;
                case 11:
                    if(getWorld(x,y-1)!==3&&getWorld(x,y-1)!==2){
                        destroy(x,y);
                    }
                    break;
                case 17:
                    switch(getWorldTag(x,y).wall){
                        case 0:
                            if(!solid[getWorld(x,y-1)]||opaque[getWorld(x,y-1)]<3){
                                destroy(x,y);
                            }
                            break;
                        case 1:
                            if(!solid[getWorld(x-1,y)]||opaque[getWorld(x-1,y)]<3){
                                destroy(x,y);
                            }
                            break;
                        case 2:
                            if(!solid[getWorld(x+1,y)]||opaque[getWorld(x+1,y)]<3){
                                destroy(x,y,true);
                            }
                            break;
                    }
                    break;
                case 18:
                    if(!solid[getWorld(x+1,y)]&&!solid[getWorld(x,y+1)]&&!solid[getWorld(x-1,y)]&&!solid[getWorld(x,y-1)]){
                        setWorld(x,y,0);
                    }
                    if(getWorld(x,y-1)===19){
                        var xx = x,yy = y-1;
                        var pX1 = x,pY1 = y,pX2 = x,pY2 = y;
                        while(getWorld(xx-1,yy)===19&&getWorld(xx-1,yy+1)!==19){xx--;}
                        if(getWorld(xx-1,yy+1)===19){
                            xx--;yy++;pX1=xx+1;
                        }else{break;}
                        while(getWorld(xx,yy+1)===19&&getWorld(xx+1,yy+1)!==19){yy++;}
                        if(getWorld(xx+1,yy+1)===19){
                            xx++;yy++;pY2 = yy-1;
                        }else{break;}
                        while(getWorld(xx+1,yy)===19&&getWorld(xx+1,yy-1)!==19){xx++;}
                        if(getWorld(xx+1,yy-1)===19){
                            xx++;yy--;pX2 = xx-1;
                        }else{break;}
                        while(getWorld(xx,yy-1)===19&&getWorld(xx-1,yy-1)!==19){yy--;}
                        if(getWorld(xx-1,yy-1)===19){
                            xx--;yy--;
                        }else{break;}
                        while(getWorld(xx-1,yy)===19&&xx!==x+1&&xx!==x){xx--;}
                        if(xx!==x&&getWorld(xx-1,yy)!==19){break;}
                        var good = true;
                        for(xx = pX1; xx <= pX2; xx++){
                            for(yy = pY1; yy <= pY2; yy++){
                                if(getWorld(xx,yy)!==0&&getWorld(xx,yy)!==18){
                                    good = false;
                                    xx = pX2+1;yy = pY2+1;
                                }
                            }
                        }
                        var wid = pX2-pX1, hei = pY2-pY1;
                        if(good&&wid>=1&&hei>=2&&wid<=20&&hei<=20){
                            portals[dimension].append([pX1,pY1]);
                            //println("New portal! Dimension: "+dimension+", Coordinates: "+portals[dimension].getValAt(portals[dimension].length-1));
                            for(var xx = pX1; xx <= pX2; xx++){
                                for(var yy = pY1; yy <= pY2; yy++){
                                    setWorld(xx,yy,43);
                                }
                            }
                        }
                    }
                    break;
                case 23:
                case 24:
                    var furnace = this.getWorldTag(x,y);
                    var elItem = furnace.contents[0];
                    var elRecipe = null;
                    for(var i = 0; i < Recipes.length; i++){
                        if(Recipes[i].type==="smelt"&&Recipes[i].item===elItem.id){
                            elRecipe = Recipes[i];
                            i = Recipes.length;
                        }
                    }
                    var elFuel = furnace.contents[1];
                    var elResult = furnace.contents[2];
                    if(elRecipe&&furnace.fuel>0&&((elRecipe.result.id===elResult.id&&elRecipe.result.type===elResult.type&&elResult.count<maxStax[elResult.id])||elResult.id===0)){
                    if(furnace.progress<599){
                        furnace.progress++;
                    }else{
                        if(furnace.contents[0].id===12){
                            setWorld(x,y,0);
                            spawnEntity(new Entity("tnt",x*40,y*40,{fuse:20}));
                            if(menu==="furnace"){
                                menu = "game";
                            }
                        }
                        furnace.progress = 0;
                        furnace.contents[0].count--;
                        furnace.contents[2] = new Item(elRecipe.result.id,elResult.count+1,elRecipe.result.type);
                        if(furnace.contents[0].count<=0){
                            furnace.contents[0] = new Item(0,0,0);
                        }
                    }
                    }else if(!elRecipe||!fuel[elFuel.id]){
                        furnace.progress = 0;
                    }
                    if(furnace.fuel<=0&&fuel[elFuel.id]&&elRecipe){
                        if(elFuel.id===10){
                            furnace.contents[1] = new Item(308,1,0);
                        }else{
                            elFuel.count--;
                        }
                        furnace.fuel = fuel[elFuel.id];
                        furnace.maxFuel = fuel[elFuel.id];
                    }else if(furnace.fuel>0){
                        furnace.fuel--;
                    }
                    if(furnace.fuel<=0&&getWorld(x,y)===24){
                        setWorld(x,y,23);
                    }
                    if(furnace.fuel>0&&getWorld(x,y)===23){
                        setWorld(x,y,24);
                    }
                    for(var i = 0; i < furnace.contents.length; i++){
                        if(furnace.contents[i].count<=0){
                            furnace.contents[i] = new Item(0,0,0);
                        }
                    }
                    break;
                case 26:
                case 27:
                    if(getWorld(x,y-1)!==3&&getWorld(x,y-1)!==2){
                        destroy(x,y);
                    }
                    break;
                case 42:
                    if(!getWorldTag(x,y).top&&(!solid[getWorld(x,y-1)]||opaque[getWorld(x,y-1)<3])){
                        destroy(x,y);
                    }
                    if(getWorldTag(x,y).top&&getWorld(x,y-1)!==42){
                        setWorld(x,y,0);
                    }
                    if(!getWorldTag(x,y).top&&getWorld(x,y+1)!==42){
                        setWorld(x,y,0);
                    }
                    break;
                case 43:
                    if(!floor(random(0,50))){
                        var a = random(0,360);
                        spawnEntity(new Entity("p_smoke",x*40+20+cos(a)*160,y*40+20+sin(a)*160,{life:100,color:color(181, 71, 217)}));
                entities.getValAt(entities.length-1).mx = -cos(a);
                entities.getValAt(entities.length-1).my = -sin(a);
                    }
                    if((getWorld(x+1,y)!==43&&getWorld(x+1,y)!==19)||(getWorld(x-1,y)!==43&&getWorld(x-1,y)!==19)||(getWorld(x,y+1)!==43&&getWorld(x,y+1)!==19)||(getWorld(x,y-1)!==43&&getWorld(x,y-1)!==19)){
                        var pind = 0;
                        for(var p = 0; p < portals[dimension].length; p++){
                            var portal = portals[dimension].getValAt(p);
                            if(x===portal[0]&&y===portal[1]){
                                //println("Portal Removed! Dimension: "+dimension+", Coordinates: "+portals[dimension].deleteValAt(pind));
                            }else{
                                pind++;
                            }
                        }
                        destroy(x,y);
                    }
            }
        }
    }
    stages[3] = millis();
    entLoc = [];
    var entindex = 0;
    if(action==="eat"){
        player.tag.speed = 0.8;
    }else{
        player.tag.speed = 2.5;
    }
    psp += ((width+height)*toPsp/2 - psp)/4;
    if(hong>6&&keys[68]&&!pkeys[68]&&cos(player.direction)>=0){
        if(sprintTimer>0){
            sprinting = 1;
        }else{
            sprintTimer = 25;
        }
    }
    if(hong>6&&keys[65]&&!pkeys[65]&&cos(player.direction)<0){
        if(sprintTimer<0){
            sprinting = -1;
        }else{
            sprintTimer = -25;
        }
    }
    if(sprinting){
        player.tag.speed = player.tag.speed*1.5;
        toPsp = 0.8;
        exhaust+=0.1/12;
    }else{
        toPsp = 1;
    }
    if((sprinting===1&&(!keys[68]||player.mx<=0||cos(player.direction)<0))||(sprinting===-1&&(!keys[65]||player.mx>=0||cos(player.direction)>=0))){
        sprinting = 0;
    }
    if(sprintTimer<0){sprintTimer++;}
    if(sprintTimer>0){sprintTimer--;}
    hostileCount = [0,0];
    for(var ent = entities.head; ent.next&&entindex<entities.length; ent = ent.next){
        var entity = ent.val;
        switch(entity.id){
            case "zombie":case "creeper":
                hostileCount[entity.dimension]++;
        }
        var hitbox = entity.hitbox;
        entLoc[entindex] = [floor(entity.x/40),floor(entity.y/40),ceil((entity.x+hitbox.width)/40-1),ceil((entity.y+hitbox.height)/40-1)];
        if(entity&&entity.dimension===dimension&&dist(entity.x,entity.y,player.x,player.y)<1600){
        if(entity!==player&&entity.tag.health<=0){
        if(!invuln(entity.id)){
        for(var i = 0; i < 10; i++){
            var θ = i*36+random(-10,10);
            spawnEntity(new Entity("p_smoke",entity.x+hitbox.width/2+cos(θ)*10,entity.y+hitbox.height/2+sin(θ)*10,{life:60,health:1}));
            var r = random(2,3);
            entities.getValAt(entities.length-1).mx = cos(θ)/r;
            entities.getValAt(entities.length-1).my = sin(θ)/r;
        }
        }
        var table = entity.drops;
        if(table){
        for(var i = 0; i < table.drops.length; i++){
            if(random(0,1)<table.odds[i]){
                var count = 1;
                if(table.count){
                    count = floor(random(table.count[i][0],table.count[i][1]+1));
                }
                if(count>0){
                var θ = random(0,180);
                var newItem = new Item(table.drops[i].id,table.drops[i].count*count,table.drops[i].type,table.drops[i].tag?defaultTag(table.drops[i].id,table.drops[i].type):table.drops[i].tag);
                spawnEntity(new Entity("item",entity.x+hitbox.width/2,entity.y+hitbox.height/2,{life:90,item:newItem,health:1}));
                entities.getValAt(entities.length-1).mx = cos(θ)*2;
                entities.getValAt(entities.length-1).my = sin(θ)*2;
                }
            }
        }}
            entities.deleteValAt(entindex);
            entindex--;
        }else{
        entity.reqm = [0,-0.3];
        if(selX>=floor(entity.x/40)&&selX<=floor((entity.x+hitbox.width)/40)&&selY>=floor(entity.y/40)&&selY<=floor((entity.y+hitbox.height)/40)&&!invuln(entity.id)&&solid[player.tag.inventory[0][curSlot].id]){
            cantplace = true;
        }
        if(corX>entity.x&&corX<entity.x+hitbox.width&&corY+40>entity.y&&corY+40<entity.y+hitbox.height&&entindex>0&&!invuln(entity.id)){
            selEntity = entity;
        }
        if(!entity.noclip){
        if(entity.inLava){
            if(entity.wasInLava){
                entity.fire = 500;
            }
            entity.fire++;
            entity.tag.health-=4;
        }
        if(entity.touching(41)){
            player.reqm[1] = -2;
            if(entity===player&&menu==="game"){
                if(!(keys[68]&&keys[65])){
                    if(keys[68]){player.reqm[0] = player.tag.speed;}
                    if(keys[65]){player.reqm[0] = -player.tag.speed;}
                }
                if(!(keys[83]&&(keys[87]||keys[32]))){
                    if(keys[87]||keys[32]){player.reqm[1] = 2;}
                    if(keys[83]){player.reqm[1] = 0;}
                }
            }
            if(entity!==player){
                switch(entity.walk){
                    case LEFT:
                        entity.reqm[0] = -entity.tag.speed;
                        break;
                    case RIGHT:
                        entity.reqm[0] = entity.tag.speed;
                        break;
                    default:
                        entity.reqm[0] = 0;
                }
            }
            if(entity.onGround&&entity.my<=0){
                entity.my = max(entity.my+(entity.reqm[1]-entity.my)/5,0);
                entity.mx += (entity.reqm[0]-entity.mx)/5;
            }else{
                entity.my += (entity.reqm[1]-entity.my)/5;
                entity.mx += (entity.reqm[0]-entity.mx)/5;
            }
        }else if(entity.inLava){
            entity.reqm[1] = -0.15;
            if(entity===player&&menu==="game"){
                if(!(keys[68]&&keys[65])){
                    if(keys[68]){player.reqm[0] = player.tag.speed/5;}
                    if(keys[65]){player.reqm[0] = -player.tag.speed/5;}
                }
                if(!(keys[83]&&keys[87])){
                    if(keys[87]||keys[32]){player.reqm[1] = 0.2;}
                    if(keys[83]){player.reqm[1] = -0.7;}
                }
            }
            if(entity!==player){
                switch(entity.walk){
                    case LEFT:
                        entity.reqm[0] = -entity.tag.speed/5;
                        break;
                    case RIGHT:
                        entity.reqm[0] = entity.tag.speed/5;
                        break;
                    default:
                        entity.reqm[0] = 0;
                }
            }
            if(entity.onGround&&entity.my<=0){
                entity.my = max(entity.my+(entity.reqm[1]-entity.my)/5,0);
                entity.mx += (entity.reqm[0]-entity.mx)/15;
            }else{
                entity.my += (entity.reqm[1]-entity.my)/15;
                entity.mx += (entity.reqm[0]-entity.mx)/15;
            }
            entity.inLava = entity.touching(10);
            if(!entity.inLava&&entity.my>0){
                entity.my = 3;
            }
        }else if(entity.inWater){
            entity.fire = false;
            if(entity===player&&menu==="game"){
                if(!(keys[68]&&keys[65])){
                    if(keys[68]){player.reqm[0] = player.tag.speed/2;}
                    if(keys[65]){player.reqm[0] = -player.tag.speed/2;}
                }
                if(!(keys[83]&&(keys[87]||keys[32]))){
                    if(keys[87]||keys[32]){player.reqm[1] = 1;}
                    if(keys[83]){player.reqm[1] = -1.5;}
                }
                if(keys[68]||keys[65]||keys[83]||keys[87]||keys[32]){
                    exhaust+=0.01/45;
                }
            }
            if(entity!==player){
                switch(entity.walk){
                    case LEFT:
                        entity.reqm[0] = -entity.tag.speed/2;
                        break;
                    case RIGHT:
                        entity.reqm[0] = entity.tag.speed/2;
                        break;
                    default:
                        entity.reqm[0] = 0;
                }
                if(entity.walk!==undefined){
                    entity.reqm[1] = 1;
                }
            }
            if(entity.onGround&&entity.my<=0){
                entity.my = max(entity.my+(entity.reqm[1]-entity.my)/5,0);
                entity.mx += (entity.reqm[0]-entity.mx)/15;
            }else{
                entity.my += (entity.reqm[1]-entity.my)/15;
                entity.mx += (entity.reqm[0]-entity.mx)/15;
            }
            entity.inWater = entity.touching(9);
            if(!entity.inWater&&entity.my>0){
                entity.my = 3;
            }
        }else{
            if(entity===player&&menu==="game"){
                if(!(keys[68]&&keys[65])){
                    if(keys[68]){player.reqm[0] = player.tag.speed;}
                    if(keys[65]){player.reqm[0] = -player.tag.speed;}
                }
                if((keys[87]||keys[32])&&entity.onGround){
                    player.my=5.8;
                    if(sprinting){
                        exhaust+=0.2;
                    }else{
                        exhaust+=0.05;
                    }
                }
            }
            if(entity!==player){
                switch(entity.walk){
                    case LEFT:
                        entity.reqm[0] = -entity.tag.speed;
                        break;
                    case RIGHT:
                        entity.reqm[0] = entity.tag.speed;
                        break;
                    default:
                        entity.reqm[0] = 0;
                }
            }
            if(entity.onGround&&entity.my<=0){
                entity.my = 0;
                entity.mx += (entity.reqm[0]-entity.mx)/5;
            }
            if(!entity.onGround){
                entity.my-=0.32;
                entity.mx += (entity.reqm[0]-entity.mx)/50;
            }
        }
        entity.onGround = false;
        var bonebreaky = entity.my+0;
        if(invuln(entity.id)){
            bonebreaky = 0;
        }
        var x = entity.x,y = entity.y;
        var mx = entity.mx,my = entity.my;
        var hx = hitbox.width,hy = hitbox.height;
        var a1,a2;
        for(var i = 20; i < hitbox.height; i+=10){
            a1 = worldFF(x+mx,i+y);a2 = worldFC(x+mx,y+hy);
            if((solid[a1[0]]||solid[a2[0]])&&mx<0){
                entity.x = floor((x+mx)/40)*40+min(dimen(a1[0],a1[1])[3],dimen(a2[0],a2[1])[3]);
                entity.mx = 0;
                x = entity.x;mx = entity.mx;
            }
            a1 = worldCF(x+mx+hx,i+y);a2 = worldCC(x+mx+hx,y+hy);
            if((solid[a1[0]]||solid[a2[0]])&&mx>0){
                entity.x = ceil((entity.x+entity.mx+hitbox.width)/40)*40-hitbox.width-40+max(dimen(a1[0],a1[1])[1],dimen(a2[0],a2[1])[1]);
                entity.mx = 0;
                x = entity.x;mx = entity.mx;
            }
        }
        for(var i = 0; i < hitbox.width; i+=10){
            a1 = worldFF(x+i,y-1);a2 = worldCF(x+hx,y-1);
            if((solid[a1[0]]||solid[a2[0]])&&my===0){
                entity.onGround = true;
                entity.my = 0;
                my = 0;
                if(a1[0]===45||a2[0]===45){
                    entity.mx = entity.mx*0.95;
                }
            }
            a1 = worldFF(x+i,y+my);a2 = worldCF(x+hx,y+my);
            if((solid[a1[0]]||solid[a2[0]])&&entity.my<0){
                entity.onGround = true;
                entity.y = floor((entity.y+entity.my)/40)*40+min(dimen(a1[0],a1[1])[0],dimen(a2[0],a2[1])[0]);
                entity.my = 0;
                y = entity.y;my = entity.my;
            }
            a1 = worldFC(x+i,y+hy+my);a2 = worldCC(x+hx,y+hy+my);
            if((solid[a1[0]]||solid[a2[0]])&&my>0){
                entity.y = floor((entity.y+hitbox.height+entity.my)/40)*40-hitbox.height+max(dimen(a1[0],a1[1])[2],dimen(a2[0],a2[1])[2]);
                entity.my = 0;
            }
        }
        if(solid[worldFF(x+mx,y)[0]]||solid[worldFF(x+mx,y+10)[0]]||solid[worldCF(x+mx+hx,y)[0]]||solid[worldCF(x+mx+hx,y+10)[0]]){
            var can = true;
            for(var i = 0; i < hx; i+=10){
                if(solid[worldFC(x+i,y+hy+20)[0]]){
                    can = false;
                }
            }
            if(hx>20&&hy>20&&entity.onGround&&can&&!solid[worldCC(x+hx,y+hy+10)[0]]){
            a1 = worldCC(x+mx,y+my+1);a2 = worldFC(x+mx+hx,y+my+1);
            if(mx>0){
                entity.y = floor((entity.y+entity.my)/40)*40+dimen(a2[0],a2[1])[0];
            }else{
                entity.y = floor((entity.y+entity.my)/40)*40+dimen(a1[0],a1[1])[0];
            }
            entity.my = 0;
            y = entity.y;my = entity.my;
            }else if(mx>0){
            a1 = worldCC(x+mx+hx,y);a2 = worldCC(x+mx+hx,y+10);
                entity.x = ceil((entity.x+entity.mx+hitbox.width)/40)*40-hitbox.width-40+max(dimen(a1[0],a1[1])[1],dimen(a2[0],a2[1])[1]);
                entity.mx = 0;
                x = entity.x;mx = entity.mx;
            }else{
            a1 = worldFC(x+mx,y);a2 = worldFC(x+mx,y+10);
                entity.x = floor((x+mx)/40)*40+min(dimen(a1[0],a1[1])[3],dimen(a2[0],a2[1])[3]);
                entity.mx = 0;
                x = entity.x;mx = entity.mx;
                
            }
        }
        if(!entity.fire){
            entity.fire = 0;
        }
        entity.inLava = entity.touching(10);
        entity.inWater = entity.touching(9);
        entity.inFire = entity.touching(18);
        if(entity.id==="sand"){
            entity.inLava = false;
            entity.inWater = false;
            entity.inFire = false;
        }
        if(bonebreaky>=0||entity.inWater||entity.touching(41)){
            entity.fallDistance = entity.y/40;
        }
        if(floor(entity.fallDistance-3)>entity.y/40&&entity.onGround){
            entity.tag.health-=entity.fallDistance-entity.y/40-3;
        }
        if(entity.inFire){
            entity.fire=300;
            entity.tag.health--;
            if(entity.id==="item"){entity.tag.health=0;}
        }else if(entity.fire>0){
            entity.fire--;
            if(entity.fire%60===0){
                entity.tag.health--;
            }
        }
        entity.wasInLava = entity.inLava;
        entity.wasInFire = entity.inFire;
        }
        if(entity.y<-1000&&entity.tag.health>0){
            entity.tag.health-=4;
        }
        if(entity.hurtTimer!==0&&entity.tag.health<entity.tag.ph){
            entity.tag.health = entity.tag.ph;
        }
        if((!entity.hurtTimer||entity.hurtTimer<=0)&&entity.tag.ph>entity.tag.health){
            entity.hurtTimer = 30;
        }else if(entity.hurtTimer>0){
            entity.hurtTimer--;
        }
        switch(entity.id){
            case "player":
                var antindex = 1;
                for(var ant = entities.head.next; ant.next; ant = ant.next){
                    var antity = ant.val;
                    if(antity.id==="item"&&antity.tag.life>=120&&dist(player.x+hitbox.width/2,player.y+hitbox.height/2,antity.x+10,antity.y+10)<80&&player.tag.health>0&&!fullInv(player.tag.inventory,antity.tag.item)){
                        if(dist(player.x+hitbox.width/2,player.y+hitbox.height/2,antity.x+10,antity.y+10)<20){
                            var elG = give(player,antity.tag.item);
                            if(elG){
                                entities.deleteValAt(antindex);
                                antindex--;
                            }
                        }else{
                            var θ = atan2(player.y+hitbox.height/2-10-antity.y,player.x+hitbox.width/2-10-antity.x);
                            antity.mx = 20*cos(θ);
                            antity.my = 20*sin(θ);
                        }
                    }
                    antindex++;
                }
                var elBlocko = getWorld(floor(player.x/40+0.3),floor(player.y/40-0.5));
                var elTypo = getWorldType(floor(player.x/40+0.3),floor(player.y/40-0.5));
                if(sprinting&&frameCount%10===0){
                    spawnEntity(new Entity("p_crumb",entity.x+12,entity.y,{life:60,block:{id:elBlocko,type:elTypo},health:1}));
                    entities.getValAt(entities.length-1).my = 2;
                }
                break;
            case "item":
                if(entity.fire>0){
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                if(entity.tag.life>120&&dist(player.x+16,player.y+32,entity.x+10,entity.y+10)>20){
                var antindex = entindex+1;
                var etem = entity.tag.item;
                for(var ant = ent.next; ant.next; ant = ant.next){
                    var antity = ant.val;
                    var atem = antity.tag.item;
                    if(antity.id==="item"&&antity.tag.health>0&&dist(entity.x,entity.y,antity.x,antity.y)<40&&etem.id===atem.id&&etem.type===atem.type&&etem.count+atem.count<maxStax[atem.id]){
                        entity.tag.item.count = entity.tag.item.count+antity.tag.item.count;
                        entity.tag.life = max(entity.tag.life,antity.tag.life);
                        entities.deleteValAt(antindex);
                    }else{
                        antindex++;
                    }
                }
                }
                if(entity.tag.life>=0){
                    entity.tag.life++;
                }
                if(entity.tag.life>10000||entity.y<0){
                    entity.tag.health=0;
                }
                break;
            case "sand":
                entity.hurtTimer = 7;
                if(entity.onGround){
                    if(fluid[getWorld(floor(entity.x/40+0.5),floor(entity.y/40+0.5))]){
                        setWorld(floor(entity.x/40+0.5),floor(entity.y/40+0.5),entity.tag.block.id);
                        setWorldType(floor(entity.x/40+0.5),floor(entity.y/40+0.5),entity.tag.block.type);
                        setWorldTag(floor(entity.x/40+0.5),floor(entity.y/40+0.5),entity.tag.block.tag);
                    }else{
                var θ = random(0,180);
                var newItem = new Item(entity.tag.block.id,1,entity.tag.block.type,entity.tag.block.tag);
                spawnEntity(new Entity("item",entity.x+10,entity.y+10,{life:90,item:newItem,health:1}));
                entities.getValAt(entities.length-1).mx = cos(θ);
                entities.getValAt(entities.length-1).my = sin(θ);
                    }
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                break;
            case "tnt":
                entity.tag.fuse--;
                if(entity.tag.fuse<=0){
                    explode(entity.x+20,entity.y+20,5);
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                break;
            case "p_crumb":
                entity.tag.life--;
                if(entity.tag.life<=0){
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                break;
            case "p_smoke":
            case "p_shock":
            case "p_spiral":
                entity.tag.life--;
                if(entity.tag.life<=0||dist(entity.x,entity.y,player.x,player.y)>1000){
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                break;
            case "pig":
                if(entity.tag.health<entity.tag.ph){
                    entity.tag.alarm = 300;
                    entity.walk = LEFT;
                    if(!floor(random(0,2))){
                        entity.walk = RIGHT;
                    }
                }
                if(entity.tag.alarm){
                    if(!floor(random(0,100))){
                        entity.walk = LEFT;
                    }
                    if(!floor(random(0,100))){
                        entity.walk = RIGHT;
                    }
                    entity.tag.speed = 3;
                    entity.tag.alarm--;
                }else{
                    if(!floor(random(0,500))){
                        entity.walk = LEFT;
                    }
                    if(!floor(random(0,500))){
                        entity.walk = RIGHT;
                    }
                    if(!floor(random(0,100))){
                        entity.walk = null;
                    }
                    entity.tag.speed = 0.9;
                }
                if(dist(entity.x,entity.y,player.x,player.y)<200&&((entity.walk!==LEFT&&player.x>entity.x+16)||(entity.walk!==RIGHT&&player.x<entity.x-16))){
                    entity.direction = atan2(30+player.y-entity.y,player.x-entity.x);
                }else{
                    if(entity.walk===LEFT){
                        entity.direction = 180;
                    }else if(entity.walk===RIGHT){
                        entity.direction = 0;
                    }else{
                        entity.direction = abs(entity.direction)<90?0:180;
                    }
                }if(!entity.inWater&&!solid[getWorld(floor((entity.x+12)/40),floor(entity.y/40+1.5))]&&((solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40+1))]&&entity.walk===LEFT)||(solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40+1))]&&entity.walk===RIGHT))&&entity.onGround){
                    entity.my = 5.7;
                }
                break;
            case "creeper":
                if(dist(player.x,player.y,entity.x,entity.y)>1500){
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                if(dist(player.x,player.y,entity.x,entity.y)<400&&player.tag.health>0&&player.hurtTimer<=0){
                    entity.direction = atan2(player.y-entity.y+10,player.x-entity.x);
                    if(player.x>entity.x){
                        entity.walk = RIGHT;
                    }else{
                        entity.walk = LEFT;
                    }
                }else{
                    if(!floor(random(0,500))){
                        entity.walk = LEFT;
                    }
                    if(!floor(random(0,500))){
                        entity.walk = RIGHT;
                    }
                    if(!floor(random(0,100))){
                        entity.walk = null;
                    }
                    switch(entity.walk){
                        case LEFT:
                            entity.direction = 180;
                            break;
                        case RIGHT:
                            entity.direction = 0;
                            break;
                        default:
                            
                    }
                }
                if(entity.tag.fuse>=90&&dist(entity.x,entity.y,player.x,player.y)<60&&player.tag.health>0){
                    entity.tag.fuse--;
                }
                if(entity.tag.fuse>0&&entity.tag.fuse<90){
                    entity.walk = null;
                    entity.tag.fuse--;
                    if(entity.tag.fuse<=0){
                        if(dist(player.x,player.y,entity.x,entity.y)>160||player.tag.health<=0){
                            entity.tag.fuse = 90;
                        }else{
                            explode(entity.x,entity.y,3);
                            entities.deleteValAt(entindex);
                            entindex--;
                        }
                    }
                }else{
                    entity.tag.fuse = 90;
                }
                if(!solid[getWorld(floor((entity.x+12)/40),floor(entity.y/40+2.5))]&&((solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40+1))]&&!solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40+2))]&&entity.walk===LEFT)||(solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40+1))]&&!solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40+2))]&&entity.walk===RIGHT))&&entity.onGround){
                    entity.my = 5.7;
                }
                break;
            case "zombie":
                if(dist(player.x,player.y,entity.x,entity.y)>1500){
                    entities.deleteValAt(entindex);
                    entindex--;
                }
                if(dist(player.x,player.y,entity.x,entity.y)<400&&player.tag.health>0&&player.hurtTimer<=0){
                    entity.direction = atan2(player.y-entity.y,player.x-entity.x);
                    if(!entity.tag.hit){
                        entity.tag.hit = 0;
                    }
                    if(dist(player.x,player.y,entity.x,entity.y)<50&&entity.tag.hit<=0){
                        if(entity.fire&&!floor(random(0,3))){
                            player.fire = 120;
                        }
                        player.tag.health-=3;
                        player.mx+=cos(entity.direction)*2;
                        player.my+=sin(entity.direction)+2;
                        entity.tag.hit = 60;
                    }
                    if(entity.tag.hit>0){
                        entity.tag.hit--;
                    }
                    if(player.x>entity.x){
                        entity.walk = RIGHT;
                    }else{
                        entity.walk = LEFT;
                    }
                }else{
                    if(!floor(random(0,500))){
                        entity.walk = LEFT;
                    }
                    if(!floor(random(0,500))){
                        entity.walk = RIGHT;
                    }
                    if(!floor(random(0,100))){
                        entity.walk = null;
                    }
                    switch(entity.walk){
                        case LEFT:
                            entity.direction = 180;
                            break;
                        case RIGHT:
                            entity.direction = 0;
                            break;
                        default:
                            
                    }
                }
                if(!solid[getWorld(floor((entity.x+12)/40),floor(entity.y/40+2.5))]&&((solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40+1))]&&!solid[getWorld(floor((entity.x-5)/40),floor(entity.y/40+2))]&&entity.walk===LEFT)||(solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40))]&&!solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40+1))]&&!solid[getWorld(floor((entity.x+hitbox.width+5)/40),floor(entity.y/40+2))]&&entity.walk===RIGHT))&&entity.onGround){
                    entity.my = 5.7;
                }
                if(getLightVal(floor(entity.x/40+0.3),floor(entity.y/40+1))===16&&getLight(floor(entity.x/40+0.3),floor(entity.y/40+1))>10&&entity.fire<=0){
                    entity.fire = 300;
                }
                break;
        }
        if(entity.id==="player"&&entity.tag.health<=0&&menu!=="death"){
            for(var i = 0; i < player.tag.inventory.length; i++){
                for(var j = 0; j < player.tag.inventory[i].length; j++){
                    if(player.tag.inventory[i][j].id!==0){
                        spawnEntity(new Entity("item",player.x,player.y+1,{life:round(random(120,150)),item:player.tag.inventory[i][j]}));
                        var θ = random(0,180);
                        entities.getValAt(entities.length-1).mx = cos(θ)*5;
                        entities.getValAt(entities.length-1).my = sin(θ)*5;
                        player.tag.inventory[i][j] = new Item(0,0,0,0,{});
                    }
                }
            }
            menu = "death";
        }
        entity.tag.ph = entity.tag.health;
        entity.x = round((entity.x+entity.mx)*20)/20;
        entity.y = round((entity.y+entity.my)*20)/20;
        }}entindex++;
    }
    stages[4] = millis();
    }
switch(dimension){
    case 0:
    var sun = abs(sin(dangle));
    if(cos(dangle)<0&&sun<0.4){
        var elX = X3D(-450,350,0),elY = Y3D(-450,350,0);
        var alpha = 1-sun*2.5;
        for(var i = 0; i < 10; i++){
            fill(255, i*20, 0, i*10*alpha);
            ellipse(elX,elY,1000-i*50,1000-i*50);
        }
    }
    if(cos(dangle)>0&&sun<0.4){
        var elX = X3D(450,350,0),elY = Y3D(450,350,0);
        var alpha = 1-sun*2.5;
        for(var i = 0; i < 10; i++){
            fill(255, i*20, 0, i*10*alpha);
            ellipse(elX,elY,1000-i*50,1000-i*50);
        }
    }
    if(sin(dangle)<0){
    stroke(255, 255, 255, sin(dangle)<-0.1?255:-2550*sin(dangle));
    strokeWeight(3);
    for(var i = 0; i < 100; i++){
        var a1 = floor(noise(i/1.4)*10000)%360+dangle;
        var a2 = sqrt(floor(noise(i/3.7)*10000)%100)*9;
        var elX = cos(a1)*sin(a2)*500;
        var elY = -sin(a1)*sin(a2)*500;
        var elZ = cos(a2)*500;
        var yy = elY;
        elY = yy*cos(30) + elZ*sin(30);
        elZ = -yy*sin(30) + elZ*cos(30);
        point3(elX,elY,elZ);
    }
    }
    strokeWeight(1);
    noStroke();
    var elX = 0,elY = -500,elZ = 0;
    var M = [[elX-50,elY,elZ-50],[elX+50,elY,elZ-50],
    [elX+50,elY,elZ+50],[elX-50,elY,elZ+50],
    [elX,elY,elZ]];
    for(var i = 0; i < M.length; i++){
        var xx = M[i][0];
        M[i][0] = M[i][0]*sin(dangle) - M[i][1]*cos(dangle);
        M[i][1] = xx*cos(dangle) + M[i][1]*sin(dangle);
        var yy = M[i][1];
        M[i][1] = M[i][1]*cos(30) + M[i][2]*sin(30);
        M[i][2] = -yy*sin(30) + M[i][2]*cos(30);
    }
    if(M[0][2]>-psp&&M[2][2]>-psp&&sin(dangle)>-0.3){
        M = M3D(M);
        fill(255);
        quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
        for(var i = 0; i < 7; i++){
            fill(255,255,255,30);
            ellipse(M[4][0],M[4][1],70+i*10,70+i*10);
        }
    }
    elY = 500;
    M = [[elX-50,elY,elZ-50],[elX+50,elY,elZ-50],
    [elX+50,elY,elZ+50],[elX-50,elY,elZ+50],
    [elX,elY,elZ]];
    for(var i = 0; i < M.length; i++){
        var xx = M[i][0];
        M[i][0] = M[i][0]*sin(dangle) - M[i][1]*cos(dangle);
        M[i][1] = xx*cos(dangle) + M[i][1]*sin(dangle);
        var yy = M[i][1];
        M[i][1] = M[i][1]*cos(30) + M[i][2]*sin(30);
        M[i][2] = -yy*sin(30) + M[i][2]*cos(30);
    }
    if(M[0][2]>-psp&&M[2][2]>-psp&&sin(dangle)<0.3){
        M = M3D(M);
        fill(255);
        quad(M[0][0],M[0][1],M[1][0],M[1][1],M[2][0],M[2][1],M[3][0],M[3][1]);
        for(var i = 0; i < 5; i++){
            fill(255,255,255,30);
            ellipse(M[4][0],M[4][1],60+i*10,60+i*10);
        }
    }
    break;
case 1:
    background(66, 0, 10);
    break;
}
    drawWorld(player.x,player.y);
    stages[5] = millis();
    var x = selX*40+sX,
    y = -selY*40+sY;
    noFill();
    if(!(fluid[getWorld(selX,selY)]&&!cantplace&&player.tag.inventory[0][curSlot].id!==0&&player.tag.inventory[0][curSlot].count>0)&&!(slab[player.tag.inventory[0][curSlot].id]&&slab[getWorld(selX,selY)])){
        cantplace = true;
    }
    stroke(255);
    var placeTag = defaultTag(player.tag.inventory[0][curSlot].id,player.tag.inventory[0][curSlot].type);
    var isSlab = false;
    if(selEntity){
        switch(selEntity.id){
            case "pig":
                stroke(0,255,0);
                break;
            case "zombie":
            case "creeper":
                stroke(255, 0, 0);
                break;
        }
        var x = sX+selEntity.x; var y = sY-selEntity.y-selEntity.hitbox.height+40;
        var xx = x+selEntity.hitbox.width;
        var yy = y+selEntity.hitbox.height;
        quad3(x,y,20,xx,y,20,xx,yy,20,x,yy,20);
    }else{
    if(menu==="game"){
        var fx = corX-selX*40;
        var fy = corY-selY*40;
        if(slab[player.tag.inventory[0][curSlot].id]){
            isSlab = true;
            if(!cantplace){
                var dr = fx+fy>0, dl = fx-fy<40;
                if(dr&&dl){
                    placeTag.orientation = 2;
                }else if(dr&&!dl){
                    placeTag.orientation = 1;
                }else if(!dr&&dl){
                    placeTag.orientation = 3;
                }else{
                    placeTag.orientation = 0;
                }
            }
        }else{
        switch(player.tag.inventory[0][curSlot].id){
            case 6:
            case 36:
                var dr = fx+fy<0, dl = fx-fy<40;
                if((dr&&dl)||(!dr&&!dl)){
                    line3(x,y+20,20,x+40,y+20,20);
                    line3(x,y+20,20,x+5,y+15,20);
                    line3(x,y+20,20,x+5,y+25,20);
                    line3(x+40,y+20,20,x+35,y+15,20);
                    line3(x+40,y+20,20,x+35,y+25,20);
                    placeTag.horizontal = true;
                }else{
                    line3(x+20,y,20,x+20,y+40,20);
                    line3(x+20,y,20,x+15,y+5,20);
                    line3(x+20,y,20,x+25,y+5,20);
                    line3(x+20,y+40,20,x+15,y+35,20);
                    line3(x+20,y+40,20,x+25,y+35,20);
                    placeTag.horizontal = false;
                }
                break;
            case 11:
            case 26:
            case 27:
                if(getWorld(selX,selY-1)!==3&&getWorld(selX,selY-1)!==2){
                    cantplace = true;
                }else if(!cantplace){
                    line3(x+20,y,20,x+20,y+40,20);
                    line3(x+20,y+40,20,x+15,y+35,20);
                    line3(x+20,y+40,20,x+25,y+35,20);
                }
                break;
            case 17:
            if(!cantplace){
                var dr = fx+fy>0, dl = fx-fy<40;
                var r = solid[getWorld(selX+1,selY)]&&opaque[getWorld(selX+1,selY)]>2;
                var l = solid[getWorld(selX-1,selY)]&&opaque[getWorld(selX-1,selY)]>2;
                var d = solid[getWorld(selX,selY-1)]&&opaque[getWorld(selX,selY-1)]>2;
                var p;
                if(r&&l&&d&&!dr&&!dl){p = DOWN;}
                else if(r&&l){
                    if(fx<20){p = LEFT;}
                    else{p = RIGHT;}
                }else if(r&&d){
                    if(dr){p = RIGHT;}
                    else{p = DOWN;}
                }else if(l&&d){
                    if(dl){p = LEFT;}
                    else{p = DOWN;}
                }else if(d){p = DOWN;}
                else if(r){p = RIGHT;}
                else if(l){p = LEFT;}
                switch(p){
                    case DOWN:
                        line3(x+20,y,20,x+20,y+40,20);
                        line3(x+20,y+40,20,x+15,y+35,20);
                        line3(x+20,y+40,20,x+25,y+35,20);
                        placeTag.wall = 0;
                        break;
                    case RIGHT:
                        line3(x,y+20,20,x+40,y+20,20);
                        line3(x+40,y+20,20,x+35,y+15,20);
                        line3(x+40,y+20,20,x+35,y+25,20);
                        placeTag.wall = 2;
                        break;
                    case LEFT:
                        line3(x,y+20,20,x+40,y+20,20);
                        line3(x,y+20,20,x+5,y+15,20);
                        line3(x,y+20,20,x+5,y+25,20);
                        placeTag.wall = 1;
                        break;
                }
                if(!p){cantplace = true;}
            }
                break;
            case 18:
                var r = solid[getWorld(selX+1,selY)];
                var l = solid[getWorld(selX-1,selY)];
                var d = solid[getWorld(selX,selY-1)];
                var u = solid[getWorld(selX,selY+1)];
                if(!cantplace&&(r||l||d||u)){
                if(d){
                    triangle3(x,y+40,20,x+10,y+20,20,x+20,y+40,20);
                    triangle3(x+20,y+40,20,x+30,y+20,20,x+40,y+40,20);
                }else if(r||l){
                    if(r){
                        triangle3(x+40,y,20,x+20,y+10,20,x+40,y+20,20);
                        triangle3(x+40,y+20,20,x+20,y+30,20,x+40,y+40,20);
                    }
                    if(l){
                        triangle3(x,y,20,x+20,y+10,20,x,y+20,20);
                        triangle3(x,y+20,20,x+20,y+30,20,x,y+40,20);
                    }
                }else if(u){
                    triangle3(x,y,20,x+10,y+20,20,x+20,y,20);
                    triangle3(x+20,y,20,x+30,y+20,20,x+40,y,20);
                }
                }else{
                    cantplace = true;
                }
                break;
            case 42:
                if(cantplace||!solid[getWorld(selX,selY-1)]||fluid[getWorld(selX,selY+1)]<2){
                    cantplace = true;
                    stroke(255,0,0);
                }else{
                    if(fx<20){placeTag.align = LEFT;}
                    else{placeTag.align = RIGHT;}
                }
    var elBox = dimen(player.tag.inventory[0][curSlot].id,placeTag);
    var a = elBox[1],b = -elBox[0],
    c = elBox[3],d = -elBox[2];
    quad3(x+a,y+b,0,x+c,y+b,0,x+c,y+d,0,x+a,y+d,0);
    quad3(x+a,y+b,40,x+c,y+b,40,x+c,y+d,40,x+a,y+d,40);
    line3(x+a,y+b,0,x+a,y+b,40);
    line3(x+c,y+b,0,x+c,y+b,40);
                break;
        }
        }
    if(cantplace){
        stroke(255,0,0);
    }
    if(player.tag.inventory[0][curSlot].id>=300&&player.tag.inventory[0][curSlot].id<=303&&fluid[getWorld(selX,selY)]<2&&getLight(selX,selY)>0){
        if((player.tag.inventory[0][curSlot].id-299!==toolReq[getWorld(selX,selY)]||player.tag.inventory[0][curSlot].type+1<harvestLevel[getWorld(selX,selY)])&&(harvestLevel[getWorld(selX,selY)]!==0||toolReq[getWorld(selX,selY)]!==player.tag.inventory[0][curSlot].type-299)){
            stroke(255,0,0);
        }else{
            stroke(0,255,0);
        }
    }
    if(player.tag.inventory[0][curSlot].id<=0||player.tag.inventory[0][curSlot].id>=305){
        stroke(255,255,255,100);
    }
    if(player.tag.inventory[0][curSlot].id<300&&player.tag.inventory[0][curSlot].id>0){
    if(slab[player.tag.inventory[0][curSlot].id]&&slab[getWorld(selX,selY)]){
        placeTag = {orientation:(getWorldTag(selX,selY).orientation+2)%4};
    }
    var elBox = dimen(player.tag.inventory[0][curSlot].id,placeTag);
    var a = elBox[1],b = 40-elBox[0],
    c = elBox[3],d = 40-elBox[2];
    quad3(x+a,y+b,0,x+c,y+b,0,x+c,y+d,0,x+a,y+d,0);
    quad3(x+a,y+b,40,x+c,y+b,40,x+c,y+d,40,x+a,y+d,40);
    line3(x+a,y+b,0,x+a,y+b,40);
    line3(x+c,y+b,0,x+c,y+b,40);
    line3(x+a,y+d,0,x+a,y+d,40);
    line3(x+c,y+d,0,x+c,y+d,40);
    }else{
    var elBox = dimen(getWorld(selX,selY),getWorldTag(selX,selY));
    var a = elBox[1],b = 40-elBox[0],
    c = elBox[3],d = 40-elBox[2];
    quad3(x+a,y+b,0,x+c,y+b,0,x+c,y+d,0,x+a,y+d,0);
    quad3(x+a,y+b,40,x+c,y+b,40,x+c,y+d,40,x+a,y+d,40);
    line3(x+a,y+b,0,x+a,y+b,40);
    line3(x+c,y+b,0,x+c,y+b,40);
    line3(x+a,y+d,0,x+a,y+d,40);
    line3(x+c,y+d,0,x+c,y+d,40);
    }
    }
    }
    toDistort = 0;
    if(mouseDown&&menu==="game"){
        if(!armSwung){
            player.arm = 60;
            armSwung = true;
        }
        if(selEntity){
            mouseDown = false;
            if(mouseButton===LEFT&&action==="free"&&selEntity.hurtTimer<=0){
                exhaust+=0.1;
                action = "smack";
                if(player.tag.inventory[0][curSlot].id>=300&&player.tag.inventory[0][curSlot].id<=304){
                    selEntity.tag.health-=damage[player.tag.inventory[0][curSlot].id-300][player.tag.inventory[0][curSlot].type];
                    if(player.tag.inventory[0][curSlot].id!==304){
                        player.tag.inventory[0][curSlot].tag.durability--;
                    }
                    player.tag.inventory[0][curSlot].tag.durability--;
                    if(player.tag.inventory[0][curSlot].tag.durability<=0){
                        player.tag.inventory[0][curSlot] = new Item(0,0,0);
                    }
                }else{
                    selEntity.tag.health--;
                }
                selEntity.mx+=cos(player.direction)*2;
                selEntity.my+=sin(player.direction)*2+2;
            }
        }else{
        if(mouseButton===RIGHT){
            if(getWorld(selX,selY)===43&&action==="free"){
                portalCooldown+=5;
                toDistort = 1;
            }else if(getWorld(selX,selY)===42&&action==="free"){
                getWorldTag(selX,selY).open = 1-getWorldTag(selX,selY).open;
                if(getWorldTag(selX,selY).top===true){
                    getWorldTag(selX,selY-1).open = getWorldTag(selX,selY).open;
                }else{
                    getWorldTag(selX,selY+1).open = getWorldTag(selX,selY).open;
                }
                action = "open door";
            }else if(getWorld(selX,selY)===12&&player.tag.inventory[0][curSlot].id===18&&action==="free"){
                setWorld(selX,selY,0);
                spawnEntity(new Entity("tnt",selX*40,selY*40,{fuse:240}));
            }else if(getWorld(selX,selY)===22&&action==="free"){
                menu = "crafting";
                mouseDown = false;
            }else if((getWorld(selX,selY)===23||getWorld(selX,selY)===24)&&action==="free"){
                menu = "furnace";
                mouseDown = false;
                invBlock = [selX,selY];
            }else if(getWorld(selX,selY)===28&&action==="free"){
                menu = "chest";
                mouseDown = false;
                invBlock = [selX,selY];
            }else if(food[player.tag.inventory[0][curSlot].id]&&ceil(player.tag.hunger)<20){
                action="eat";
                actionTimer++;
                if(actionTimer<15){
                    player.arm = actionTimer*6;
                }else if(actionTimer<96){
                    player.arm = sin(actionTimer*24)*15+90;
                }
                if(actionTimer>=96){
                    actionTimer = 0;
                    player.arm = 0;
                    player.tag.hunger+=food[player.tag.inventory[0][curSlot].id][0];
                    player.tag.saturation+=food[player.tag.inventory[0][curSlot].id][1];
                    player.tag.inventory[0][curSlot].count--;
                    if(player.tag.inventory[0][curSlot].id===314){
        for(var i = 0; i < 10; i++){
            var θ = i*36+random(-10,10);
            spawnEntity(new Entity("p_spiral",player.x+player.hitbox.width/2+cos(θ)*10,player.y+player.hitbox.height/2+sin(θ)*10,{life:60,health:1,color:color(255, 168, 255)}));
            var r = random(2,3);
            entities.getValAt(entities.length-1).mx = cos(θ)/r;
            entities.getValAt(entities.length-1).my = sin(θ)/r;
        }
                    player.tag.health+=10;
                    if(player.tag.health>=20){
                        player.tag.health = 20;
                    }
                    }
                    if(player.tag.inventory[0][curSlot].count<=0){
                        player.tag.inventory[0][curSlot] = new Item(0,0,0);
                    }
                    if(player.tag.inventory[0][curSlot].id===0||player.tag.hunger>=20){
                        action="free";
                    }
                }
            }if(player.tag.inventory[0][curSlot].id<300&&!cantplace&&(breakingBlock[0]!==selX||breakingBlock[1]!==selY)){
                breakingBlock[0] = selX;breakingBlock[1] = selY;
            if(slab[getWorld(selX,selY)]&&slab[player.tag.inventory[0][curSlot].id]){
                var a = getWorld(selX,selY);
                var at = getWorldType(selX,selY);
                var b = player.tag.inventory[0][curSlot].id;
                var bt = player.tag.inventory[0][curSlot].type;
                var tag = getWorldTag(selX,selY);
                setWorld(selX,selY,36);
                setWorldType(selX,selY,0);
                switch(tag.orientation){
                    case 0:
                        placeTag = {horizontal:false,a:a,at:at,b:b,bt:bt};
                        break;
                    case 1:
                        placeTag = {horizontal:true,a:a,at:at,b:b,bt:bt};
                        break;
                    case 2:
                        placeTag = {horizontal:false,a:b,at:bt,b:a,bt:at};
                        break;
                    case 3:
                        placeTag = {horizontal:true,a:b,at:bt,b:a,bt:at};
                        break;
                }
            }else{
                setWorld(selX,selY,player.tag.inventory[0][curSlot].id);
                setWorldType(selX,selY,player.tag.inventory[0][curSlot].type);
                if(player.tag.inventory[0][curSlot].id===42){
                    setWorld(selX,selY+1,42);
                    setWorldType(selX,selY+1,player.tag.inventory[0][curSlot].type);
                    setWorldTag(selX,selY+1,{align:placeTag.align,open:false,top:true});
                }
            }
            action = "place";
            player.arm = 70;
            if(placeTag){
                setWorldTag(selX,selY,placeTag);
            }else{
                setWorldTag(selX,selY,player.tag.inventory[0][curSlot].tag);
            }
            if(player.tag.inventory[0][curSlot].id===9||player.tag.inventory[0][curSlot].id===10){
                player.tag.inventory[0][curSlot] = new Item(308,1,0);
                player.arm = 70;
                mouseDown = false;
            }else if(defaultTag(player.tag.inventory[0][curSlot].id).durability){
                player.arm = 70;
                player.tag.inventory[0][curSlot].tag.durability--;
            if(player.tag.inventory[0][curSlot].tag.durability<=0){player.tag.inventory[0][curSlot] = new Item(0,0,0);}
            }else{
                player.tag.inventory[0][curSlot].count--;
            }
            }else{
                switch(player.tag.inventory[0][curSlot].id){
                    case 308:
                        if((getWorld(selX,selY)===9||getWorld(selX,selY)===10)&&getWorldTag(selX,selY).level===0){
                            if(player.tag.inventory[0][curSlot].count>1){
                                give(player,new Item(getWorld(selX,selY),1,0));
                                player.tag.inventory[0][curSlot].count--;
                            }else{
                                player.tag.inventory[0][curSlot] = new Item(getWorld(selX,selY),1,0);
                            }
                            setWorld(selX,selY,0);
                            setWorldTag(selX,selY,{});
                            mouseDown = false;
                        }
                        break;
                }
            }
        }
        if(mouseButton===LEFT&&fluid[getWorld(selX,selY)]<2){
            action = "break";
            if(player.arm<=0){
                player.arm = 70;
            }
            if(getWorld(selX,selY)===36){
                if(getWorldTag(selX,selY).horizontal){
                    selSlab = 1-floor(corX/20-selX*2);
                }else{
                    selSlab = floor(corY/20-selY*2)+2;
                }
            }
            if(getWorld(selX,selY)===36&&(breakingBlock[0]!==selX||breakingBlock[1]!==selY||blockBreak===0||pselSlab!==selSlab||player.tag.inventory[0][curSlot].id!==usingTool)){
                pselSlab = selSlab;
                if(selSlab===1){
                    blockBreak = hardness[getWorldTag(selX,selY).b];
                }else{
                    blockBreak = hardness[getWorldTag(selX,selY).a];
                }
                breakingBlock[0] = selX;
                breakingBlock[1] = selY;
                usingTool = player.tag.inventory[0][curSlot].id;
            }else if(blockBreak===0||breakingBlock[0]!==selX||breakingBlock[1]!==selY||player.tag.inventory[0][curSlot].id!==usingTool){
                blockBreak = hardness[getWorld(selX,selY)];
                breakingBlock[0] = selX;
                breakingBlock[1] = selY;
                usingTool = player.tag.inventory[0][curSlot].id;
            }else if(hardness[getWorld(selX,selY)]>=0){
                var canHarvest = true;
                var breakSpeed = 1;
                if(getWorld(selX,selY)===36){
                var elBlock = selSlab===1?getWorldTag(selX,selY).a:getWorldTag(selX,selY).b;
                if(toolReq[getWorld(selX,selY)]===usingTool-299){
                    switch(player.tag.inventory[0][curSlot].type){
                        case 0:
                            breakSpeed = 2;
                            break;
                        case 1:
                            breakSpeed = 4;
                            break;
                        case 2:
                            breakSpeed = 6;
                            break;
                        case 3:
                            breakSpeed = 12;
                            break;
                        case 4:
                            breakSpeed = 8;
                            break;
                        case 5:
                            breakSpeed = 9;
                            break;
                    }
                    if(harvestLevel[elBlock]-1>player.tag.inventory[0][curSlot].type){
                        breakSpeed = breakSpeed*0.3;
                        canHarvest = false;
                    }
                }else if(toolReq[elBlock]!==usingTool-299&&harvestLevel[elBlock]!==0){
                    breakSpeed = breakSpeed*0.3;
                    canHarvest = false;
                }
            }else{
                if(toolReq[getWorld(selX,selY)]===usingTool-299){
                    switch(player.tag.inventory[0][curSlot].type){
                        case 0:
                            breakSpeed = 2;
                            break;
                        case 1:
                            breakSpeed = 4;
                            break;
                        case 2:
                            breakSpeed = 6;
                            break;
                        case 3:
                            breakSpeed = 12;
                            break;
                        case 4:
                            breakSpeed = 8;
                            break;
                        case 5:
                            breakSpeed = 9;
                            break;
                    }
                    if(harvestLevel[getWorld(selX,selY)]-1>player.tag.inventory[0][curSlot].type){
                        breakSpeed = breakSpeed*0.3;
                        canHarvest = false;
                    }
                }else if(toolReq[getWorld(selX,selY)]!==usingTool-299&&harvestLevel[getWorld(selX,selY)]!==0){
                    breakSpeed = breakSpeed*0.3;
                    canHarvest = false;
                }
                }
                blockBreak = max(blockBreak-breakSpeed,0);
                if(blockBreak===0){
                    if(player.tag.inventory[0][curSlot].id>=300&&player.tag.inventory[0][curSlot].id<305){
                        if(toolReq[getWorld(selX,selY)]===player.tag.inventory[0][curSlot].id-299){
                            player.tag.inventory[0][curSlot].tag.durability--;
                        }else{
                            player.tag.inventory[0][curSlot].tag.durability-=2;
                        }
                        if(player.tag.inventory[0][curSlot].tag.durability<=0){
                            player.tag.inventory[0][curSlot] = new Item(0,0,0);
                        }
                    }
                    exhaust+=0.005;
                    if(getWorld(selX,selY)===36){
                        var otherBlock;
                        var otherBlockType;
                        var horizontal = getWorldTag(selX,selY).horizontal;
                        if(selSlab===1){
            otherBlock = getWorldTag(selX,selY).a;
            otherBlockType = getWorldTag(selX,selY).at;
            setWorld(selX,selY,getWorldTag(selX,selY).b);
            setWorldType(selX,selY,getWorldTag(selX,selY).bt);
                            destroy(selX,selY,canHarvest);
                            setWorld(selX,selY,otherBlock);
                            setWorldType(selX,selY,otherBlockType);
                            if(horizontal){
                                getWorldTag(selX,selY).orientation = 1;
                            }else{
                                getWorldTag(selX,selY).orientation = 0;
                            }
                        }else{
            otherBlock = getWorldTag(selX,selY).b;
            otherBlockType = getWorldTag(selX,selY).bt;
            setWorld(selX,selY,getWorldTag(selX,selY).a);
            setWorldType(selX,selY,getWorldTag(selX,selY).at);
                            destroy(selX,selY,canHarvest);
                            setWorld(selX,selY,otherBlock);
                            setWorldType(selX,selY,otherBlockType);
                            if(horizontal){
                                getWorldTag(selX,selY).orientation = 3;
                            }else{
                                getWorldTag(selX,selY).orientation = 2;
                            }
                        }
                        
                    }else{
                        destroy(selX,selY,canHarvest);
                    }
                }
            }
            noFill();
            stroke(0,0,0,150);
            strokeWeight(2);
            x = selX*40+sX;
            y = -selY*40+sY;
            var prog;
            if(getWorld(selX,selY)===36){
                if(selSlab===1){
                    prog = 5-blockBreak*5/hardness[getWorldTag(selX,selY).b];
                }else{
                    prog = 5-blockBreak*5/hardness[getWorldTag(selX,selY).a];
                }
            }else{
                prog = 5-blockBreak*5/hardness[getWorld(selX,selY)];
            }
            line(X3D(x+20,y+20,0),Y3D(x+20,y+20,0),X3D(x+16,y+24,0),Y3D(x+16,y+24,0));
            //prog = 10;
            if(prog>1){
                line(X3D(x+20,y+20,0),Y3D(x+20,y+20,0),X3D(x+24,y+26,0),Y3D(x+24,y+26,0));
                line(X3D(x+20,y+20,0),Y3D(x+20,y+20,0),X3D(x+22,y+16,0),Y3D(x+22,y+16,0));
            }
            if(prog>2){
                line(X3D(x+24,y+26,0),Y3D(x+24,y+26,0),X3D(x+28,y+24,0),Y3D(x+28,y+24,0));
                line(X3D(x+16,y+24,0),Y3D(x+16,y+24,0),X3D(x+12,y+22,0),Y3D(x+12,y+22,0));
                line(X3D(x+22,y+16,0),Y3D(x+22,y+16,0),X3D(x+18,y+10,0),Y3D(x+18,y+10,0));
                line(X3D(x+22,y+16,0),Y3D(x+22,y+16,0),X3D(x+30,y+14,0),Y3D(x+30,y+14,0));
            }
            if(prog>3){
                line(X3D(x+16,y+24,0),Y3D(x+16,y+24,0),X3D(x+14,y+32,0),Y3D(x+14,y+32,0));
                line(X3D(x+18,y+10,0),Y3D(x+18,y+10,0),X3D(x+10,y+10,0),Y3D(x+10,y+10,0));
                line(X3D(x+18,y+10,0),Y3D(x+18,y+10,0),X3D(x+16,y+4,0),Y3D(x+16,y+4,0));
                line(X3D(x+24,y+26,0),Y3D(x+24,y+26,0),X3D(x+28,y+36,0),Y3D(x+28,y+36,0));
                line(X3D(x+30,y+14,0),Y3D(x+30,y+14,0),X3D(x+32,y+8,0),Y3D(x+32,y+8,0));
            }
            if(prog>4){
                line(X3D(x+30,y+14,0),Y3D(x+30,y+14,0),X3D(x+38,y+12,0),Y3D(x+38,y+12,0));
                line(X3D(x+12,y+22,0),Y3D(x+12,y+22,0),X3D(x+4,y+26,0),Y3D(x+4,y+26,0));
                line(X3D(x+12,y+22,0),Y3D(x+12,y+22,0),X3D(x+10,y+16,0),Y3D(x+10,y+16,0));
                line(X3D(x+28,y+24,0),Y3D(x+28,y+24,0),X3D(x+36,y+26,0),Y3D(x+36,y+26,0));
                line(X3D(x+28,y+24,0),Y3D(x+28,y+24,0),X3D(x+30,y+22,0),Y3D(x+30,y+22,0));
            }
            //println(prog);
            noStroke();
            strokeWeight(1);
        }
        }
    }else{
        blockBreak = 0;
        armSwung = false;
        breakingBlock = [];
        action = "free";
    }
    if(action!=="eat"){
        actionTimer = 0;
    }
if(portalCooldown>=240){
    portalCooldown = 240;
    if(dimension===1||dimension===0){
        mouseDown = false;
        dimension = 1-dimension;
        var chosenPortal = null;
        var shortest = null;
        var ratio = dimension===1?0.125:8;
        var ppos = floor(player.x*ratio/40);
        if(!chunksGenerated[dimension][floor(ppos/16)]){
            genChunk(floor(ppos/16));
        }
        for(var p = portals[dimension].head; p.next; p = p.next){
            var portal = p.val;
            var dst = abs(ppos-portal[0]);
            if(dst<64&&(!shortest||dst<shortest)){
                shortest = dst;
                chosenPortal = portal;
            }
        }
        if(chosenPortal===null){
            var found = null;
            for(var i = 100; i >= 31; i--){
                if(solid[getWorld(ppos,i)]&&!solid[getWorld(ppos,i+1)]&&!solid[getWorld(ppos,i+2)]){
                    found = i;
                    break;
                }
            }
            if(!found){
                found = floor(random(35,70));
                setWorld(ppos,found+1,0);
                setWorld(ppos,found,0);
                for(var x = ppos-1; x <= ppos+5; x++){
                    setWorld(x,found-1,19);
                }
            }
            player.x = ppos*40; player.y = found*40;
            portals[dimension].append([ppos+2,found+1]);
            //println("New Portal! Dimension: "+dimension+", Coordinates: "+portals[dimension].getValAt(portals[dimension].length-1));
            for(var x = ppos+1; x <= ppos+4; x++){
                for(var y = found; y <= found+4; y++){
                    if(x===ppos+1||x===ppos+4||y===found||y===found+4){
                        setWorld(x,y,19);
                    }else{setWorld(x,y,43);}
                }
            }
        }else{
            player.x = chosenPortal[0]*40-80;
            player.y = chosenPortal[1]*40;
        }
        action = "teleported";
        portalCooldown = 0;
    }
}
if(portalCooldown>0){
    portalCooldown-=4;
    fill(141, 0, 217,distortion*200);
    noStroke();
    rect(-width,-height,width*2,height*2);
}else{
    toDistort = 0;
}
    stages[6] = millis();
    if(keys[69]&&menu!=="death"&&menu!=="pause"){
        keys[69] = false;
        if(menu==="game"){
            menu = "inventory";
        }else{
            menu = "game";
            for(var i = 0; i < 9; i++){
                give(player,craftGrid[floor(i/3)][i%3]);
                craftGrid[floor(i/3)][i%3] = new Item(0,0,0);
            }
        }
    }
    if(keys[80]&&menu==="game"){
        menu = "pause";
    }
    if(keys[114]){
        keys[114] = false;
        if(debugMode){
            debugMode = false;
        }else{
            debugMode = true;
        }
    }
    for(var i = 0; i < 9; i++){
        if(keys[i+49]){
            keys[i+49] = false;
            curSlot = i;
        }
    }
    noStroke();
    resetMatrix();
    translate(width/2,height/2);
    fill(150);
    quad(-201,height/2-51,200,height/2-51,196,height/2-47,-196,height/2-47);
    quad(-201,height/2-51,-201,height/2,-196,height/2-4,-196,height/2-47);
    fill(100);
    quad(200,height/2-51,200,height/2,196,height/2-4,196,height/2-47);
    quad(200,height/2,-201,height/2,-196,height/2-4,196,height/2-4);
    for(var i = 0; i < 9; i++){
        var x = i*43.6-193;
        var y = height/2-43;
        noStroke();
        fill(50,50,50,200);
        rect(x,y,36,36);
        fill(100);
        quad(x,y,x+36,y,x+40,y-4,x-4,y-4);
        quad(x,y,x,y+36,x-4,y+40,x-4,y-4);
        fill(150);
        quad(x+36,y+36,x+36,y,x+40,y-4,x+40,y+40);
        quad(x+36,y+36,x,y+36,x-4,y+40,x+40,y+40);
        if(player.tag.inventory[0][i].id===0||player.tag.inventory[0][i].count<=0){
            player.tag.inventory[0][i] = new Item(0,0,0);
        }
        drawItem(player.tag.inventory[0][i],x+4,y+3);
        fill(255);
        textSize(10);
        text((i+1),x+6,y-1);
    }
    var shakeHP = 0;
    var shakeFD = 0;
    if(player.tag.health<=4){
        shakeHP = sin(frameCount*50)*2;
    }
    if(player.tag.hunger<=4){
        shakeFD = sin(frameCount*50)*2;
    }
    if(hongShake>0){
        shakeFD = sin(hongShake*40)*2;
        hongShake--;
    }
    for(var i = 0; i < 10; i ++){
        var SH = shakeHP*(i&1?1:-1);
        var SF = shakeFD*(i&1?1:-1);
        fill(50);
        ellipse(i*18-195,height/2-82+SH,12,12);
        ellipse(i*18-187,height/2-82+SH,12,12);
        triangle(i*18-181,height/2-79+SH,i*18-200,height/2-79+SH,i*18-191.5,height/2-68+SH);
        if(pHealth-1>=i*2&&pHealth>hp){
            fill(255);
            var x = i*18-195,y = height/2-82+SH;
            ellipse(x,y,8,8);
            triangle(x-4,y+2,x+4,y+11,x+4,y);
        }
        if(hp-1>=i*2){
            fill(255, 0, 0);
            var x = i*18-195,y = height/2-82+SH;
            ellipse(x,y,8,8);
            triangle(x-4,y+2,x+4,y+11,x+4,y);
            fill(170,0,0);
            quad(x-3,y+4,x-5,y,x+4,y+11,x-4,y-3);
        }
        if(pHealth-2>=i*2&&pHealth>hp){
            fill(255);
            var x = i*18-187,y = height/2-82+SH;
            ellipse(x,y,8,8);
            triangle(x+4,y+2,x-4,y+11,x-4,y);
        }
        if(hp-2>=i*2){
            fill(255, 0, 0);
            var x = i*18-187,y = height/2-82+SH;
            ellipse(x,y,8,8);
            triangle(x+4,y+2,x-4,y+11,x-4,y);
            fill(255);
            ellipse(x,y,6,6);
            fill(255,0,0);
            ellipse(x-2,y+2,7,7);
        }
        var x = 184-i*18,y = height/2-87+SF;
        translate(x+8,y+8);
        rotate(45);
        fill(50);
        ellipse(0,0,19,14);
        ellipse(10.5,-1,6,6);
        ellipse(10.5,2.5,6,6);
        if(hong-1===i*2){
            fill(255);
            rect(-2,-1,13,2.5);
            ellipse(10,-0.5,3,3);
            ellipse(10,2,3,3);
            fill(171, 99, 44);
            arc(0,0,15,10,-90,90);
            fill(255,0,0);
            ellipse(1,0,5,8);
            fill(255);
            ellipse(-0.5,0,6,3);
            ellipse(-3,-1.5,3,3);
            ellipse(-3,1.5,3,3);
        }
        if(hong-1>i*2){
            fill(255);
            rect(0,-1,10,2.5);
            ellipse(10,-0.5,3,3);
            ellipse(10,2,3,3);
            fill(171, 99, 44);
            ellipse(0,0,15,10);
            fill(255,0,0);
            ellipse(-4,0,5,8);
            fill(255);
            ellipse(-5,0,3,3);
        }
        rotate(-45);
        translate(-x-8,-y-8);
    }
    textSize(15);
    if(pHealth>hp){
        fill(255,0,0,(pHealth-hp)*10);
        rect(-width,-height,width*3,height*3);
    }
    fill(255);
    var x = curSlot*43.6-193;
    var y = height/2-43;
    quad(x,y,x+36,y,x+44,y-8,x-8,y-8);
    quad(x,y,x,y+36,x-8,y+44,x-8,y-8);
    fill(200);
    quad(x+44,y+44,x-8,y+44,x,y+36,x+36,y+36);
    quad(x+44,y+44,x+44,y-8,x+36,y,x+36,y+36);
    stages[7] = millis();
    if(debugMode){
        textSize(15);
        textAlign(LEFT,TOP);
        fill(255);
        var elNode = entities.head;
        var i = 0;
        while(elNode.next){
            var entity = elNode.val;
            fill(255);
            stroke(255, 0, 0);
            text("ID: "+entity.id,20-width/2,i*20+20-height/2);
            text("X: "+floor(entity.x/4)/10,100-width/2,i*20+20-height/2);
            text("Y: "+floor(entity.y/4)/10,170-width/2,i*20+20-height/2);
            line(20-width/2,i*20+30-height/2,X3D(entity.x+sX,-entity.y+sY,0),Y3D(entity.x+sX,-entity.y+sY,0));
            elNode = elNode.next;
            i++;
        }
        textAlign(LEFT,TOP);
        fill(255);
        text("Block: "+blockName[getWorld(selX,selY)][getWorldType(selX,selY)],width/2-200,-height/2+20);
        text("Type: "+getWorldType(selX,selY),width/2-200,-height/2+40);
        noStroke();
        var hundo = stages[stages.length-1] - stages[0];
        colorMode(HSB);
        for(var i = stages.length-1; i > 0; i--){
            fill(i*255/stages.length,255,255);
            text("Stage "+i,width/2-100,i*15);
            arc(width/2-50,height/2-50,100,100,0,(stages[i]-stages[0])*360/hundo);
        }
        colorMode(RGB);
        fill(255);
        text("FPS: "+min(floor(1000/hundo),60),width/2-100,0);
        fpsLog[fpsLog.length] = min(floor(1000/hundo),60);
        for(var i = 0; i < 50; i++){
            var ind = max(0,fpsLog.length-i);
            if(fpsLog[ind]){
                if(fpsLog[ind]===60){fill(0,255,0);}else
                if(fpsLog[ind]>40){fill(255,255,0);}else
                {fill(255, 0, 0);}
                rect(width/2-i*2,height/2-100,2,-fpsLog[ind]/2);
            }
        }
    }
    var inv = entities.head.val.tag.inventory;
    switch(menu){
        case "pause":
            fill(0,0,0,100);
            noStroke();
            rect(-width/2,-height/2,width,height);
            fill(255);
            textAlign(CENTER,CENTER);
            textSize(30);
            text("Game Menu",0,-120);
            button("Back to Game",-150,-60,300,40,0,0);
            button("Options",-150,0,300,40,1,1);
            button("Save World",-150,60,300,40,2,2);
            button("Return to Title Screen",-150,120,300,40,3,3);
            if(f[0]){
                f[0] = false;
                menu = "game";
            }
            if(f[1]){
                f[1] = false;
                menu = "options";
            }
            if(f[3]){
                
                f[3] = false;
                anim = 0;
                menu = "title";
curwid = 0;
index = 0;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < logo[i].length; j++){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [j*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var i = 5; i < 9; i++){
    for(var j = logo[i].length-1; j >= 0; j--){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [(curwid+k)*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var j = 0; j < logo[9].length; j++){
    for(var k = logo[9][j].length-1; k >= 0; k--){
        if(logo[9][j][k]){
            logpos[index] = [k*10+190,(1000*(1+9*j*j+k*k*3))];
            corpos[index] = [k*10+190,j*10];
            index++;
        }
    }
}
            }
            break;
        case "death":
            fill(255,0,0,100);
            noStroke();
            rect(-width/2,-height/2,width,height);
            fill(255);
            translate(0,-100);
            textSize(50);
            textAlign(CENTER,CENTER);
            rotate(10*pHealth);
            text("You died!",0,0);
            rotate(-10*pHealth);
            translate(0,100);
            button("Respawn",-100,0,200,40,0,0);
            button("Title Screen",-100,60,200,40,1,1);
            if(f[0]){
                dimension = 0;
                entities.head.val = new Entity("player",0,groundLevel(0)*40+160,{
        speed:2.5,
        inventory: [[],[],[],[]],
        health:20,
        air:20,
        hunger:20,
        saturation:5,
        dimension:0,
        xp:0,
        lvl:0
    });
                for(var i = 0; i < 36; i++){
                    entities.head.val.tag.inventory[floor(i/9)][i%9] = new Item(0,0,0,{});
                }
                menu = "game";
                f[0] = false;
            }
            if(f[1]){
                f[1] = false;
                anim = 0;
                menu = "title";
curwid = 0;
index = 0;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < logo[i].length; j++){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [j*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var i = 5; i < 9; i++){
    for(var j = logo[i].length-1; j >= 0; j--){
        for(var k = 0; k < logo[i][j].length; k++){
            if(logo[i][j][k]){
                i = i+1;
                logpos[index] = [(curwid+k)*10,400+(1000*i*i*(i+j*j+k))];
                corpos[index] = [(curwid+k)*10,j*10];
                index++;
                i = i-1;
            }
        }
    }
    curwid += logo[i][0].length+1;
}
for(var j = 0; j < logo[9].length; j++){
    for(var k = logo[9][j].length-1; k >= 0; k--){
        if(logo[9][j][k]){
            logpos[index] = [k*10+190,(1000*(1+9*j*j+k*k*3))];
            corpos[index] = [k*10+190,j*10];
            index++;
        }
    }
}
            }
            resetMatrix();
            break;
        case "recipes":
            var recipeGrid = [];
            var recipeBook = [];
            var indexList = [];
            var onSlot = false;
            noStroke();
            fill(0,0,0,150);
            rect(-width/2,-height/2,width,height);
            fill(150);
            triangle(205,-205,-205,205,205,205);
            fill(255);
            triangle(205,-205,-205,205,-205,-205);
            fill(200);
            rect(-200,-200,400,400);
            var mX = mouseX-width/2;
            var mY = mouseY-height/2;
            var onCrafting = 0;
            if(mX>-198&&mY>0&&mX<198&&mY<176){
                selX = floor((mX-198)/44)+9;
                selY = floor(mY/44);
            }else{
                selX = null;
                selY = null;
                switch(menu2){
                    case "2x2":
                    case "3x3":
                if(mX>-110&&mX<22&&mY>-172&&mY<-44){
                    selX = floor((mX+110)/44);
                    selY = floor((mY+176)/44);
                    onCrafting = 1;
                }else if(mX>66&&mX<110&&mY>-132&&mY<-88){
                    onCrafting = 2;
                    selX = 0;
                    selY = 0;
                }else{
                }
                break;
                    case "Furnace":
                if(mX>-88&&mX<-44&&mY>-176&&mY<-132){
                    onCrafting = 1;
                    selX = 0;
                }else if(mX>-88&&mX<-44&&mY>-88&&mY<-44){
                    onCrafting = 2;
                    selX = 0;
                }else if(mX>44&&mX<88&&mY>-132&&mY<-88){
                    onCrafting = 3;
                    selX = 0;
                }
                }
            }
            var result = new Item(0,0,0,0,{});
            switch(menu2){
            case "2x2":case "3x3":
            for(var i = 0; i < 9; i++){
                var x = i%3;
                var y = floor(i/3);
                if(Recipes[curRecipe].shapeless&&Recipes[curRecipe].recipe[i]){
                    recipeGrid[i] = new Item(Recipes[curRecipe].recipe[i],1,Recipes[curRecipe].types?Recipes[curRecipe].types[i]:0);
                }else if(!Recipes[curRecipe].shapeless&&y<Recipes[curRecipe].recipe.length&&x<Recipes[curRecipe].recipe[y].length){
                    recipeGrid[i] = new Item(Recipes[curRecipe].recipe[y][x],1,Recipes[curRecipe].types?Recipes[curRecipe].types[y][x]:0);
                }else{
                    recipeGrid[i] = new Item(0,0,0);
                }
                if(!Recipes[curRecipe].shapeless&&!Recipes[curRecipe].types){
                    recipeGrid[i].type = floor(noise(floor(frameCount/80)*30.4,i/9.8+0.5)*100)%itemName[recipeGrid[i].id].length;
                }
                var xx = -106+x*44,yy = y*44-172;
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(recipeGrid[i],xx+3,yy+3);
                if(menu2==="2x2"&&(x===2||y===2)){
                    fill(0,0,0,100);
                    rect(xx-4,yy-4,44,44);
                }else if(selX===x&&selY===y&&onCrafting===1){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            fill(0,0,0,50);
            rect(25,-118,20,16);
            triangle(45,-127,60,-110,45,-93);
            var xx = 70, yy = -128;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(Recipes[curRecipe].result,xx+3,yy+3);
            if(onCrafting===2){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            break;
            case "Furnace":
            while(Recipes[curRecipe].type!=="smelt"&&curRecipe<Recipes.length){
                curRecipe++;
            }
            var container = [new Item(Recipes[curRecipe].item,1,0),new Item(307,1,0),Recipes[curRecipe].result];
            var xx = -84, yy = -172;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[0],xx+3,yy+3);
            if(onCrafting===1){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            var xx = -84, yy = -84;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[1],xx+3,yy+3);
            if(onCrafting===2){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            var xx = 48, yy = -128;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[2],xx+3,yy+3);
            if(onCrafting===3){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            fill(0,0,0,50);
            rect(-30,-118,50,16);
            triangle(20,-127,35,-110,20,-93);
            xx = -66;yy = -95;
            for(var i = 0; i < 30; i++){
                rect(xx+sin(i*15-60)*2-5+i/8,yy-i,8-i/4,1);
                rect(xx+sin(i*15+40)*2-5+i/8-12,yy-i,8-i/4,1);
                rect(xx+sin(i*15-180)*2-5+i/8+12,yy-i,8-i/4,1);
            }
            xx = -68;yy = -97;
            for(var i = 0; i < 30; i++){
                fill(255, 100, 0);
                rect(xx+sin(i*15-60)*2-5+i/8,yy-i,8-i/4,1);
                rect(xx+sin(i*15+40)*2-5+i/8-12,yy-i,8-i/4,1);
                rect(xx+sin(i*15-180)*2-5+i/8+12,yy-i,8-i/4,1);
                if(i<20){
                fill(255,200,0);
                rect(xx+sin(i*15-60)*2-4+i/8,yy-i,6-i/4,1);
                rect(xx+sin(i*15+40)*2-4+i/8-12,yy-i,6-i/4,1);
                rect(xx+sin(i*15-180)*2-4+i/8+12,yy-i,6-i/4,1);
                if(i<10){
                fill(255, 255, 199);
                rect(xx+sin(i*15-60)*2-3+i/8,yy-i,4-i/3,1);
                rect(xx+sin(i*15+40)*2-3+i/8-12,yy-i,4-i/3,1);
                rect(xx+sin(i*15-180)*2-3+i/8+12,yy-i,4-i/3,1);
                }}
            }
            fill(255);
            rect(-30,-120,50,16);
            triangle(20,-129,20,-95,35,-112);
            var xx = 46, yy = -128;
            break;
            }
            button("",xx,yy+66,36,36,0,0);
            fill(50);
            rect(xx+20,yy+87,10,10);
            arc(xx+20,yy+87,20,20,270,360);
            rect(xx+15,yy+77,5,10);
            triangle(xx+15,yy+72,xx+15,yy+92,xx+5,yy+82);
            fill(50);
            textAlign(CENTER,TOP);
            textSize(20);
            text(menu2==="2x2"||menu2==="3x3"?"Crafting "+"("+menu2+")":menu2,0,-200);
            textAlign(LEFT,TOP);
            text("Recipes",-195,-30);
            if(f[0]){
                switch(menu2){
                    case "2x2":
                        menu = "inventory";
                        break;
                    case "3x3":
                        menu = "crafting";
                        break;
                    case "Furnace":
                        menu = "furnace";
                        break;
                }
                f[0] = false;
                mouseDown = false;
            }
            var ind = 0;
            for(var i = 0; i < 36; i++){
                var x = i%9;
                var y = floor(i/9);
                var xx = -194+x*44,yy = y*44+4;
        switch(menu2){
            case "2x2":case "3x3":
                while(ind<Recipes.length&&(Recipes[ind].type!=="craft"||(menu2==="2x2"&&(Recipes[ind].recipe.length>4||Recipes[ind].recipe.length===3||Recipes[ind].recipe[0].length===3)))){
                    ind++;
                }
                if(ind<Recipes.length){
                    recipeBook[i] = Recipes[ind].result;
                    indexList[i] = ind;
                }
                break;
            case "Furnace":
                while(ind<Recipes.length&&Recipes[ind].type!=="smelt"){
                    ind++;
                }
                if(ind<Recipes.length){
                    recipeBook[i] = Recipes[ind].result;
                    indexList[i] = ind;
                }
                break;
        }
                if(indexList[i]===curRecipe){
                    fill(100);
                    triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                    fill(175);
                    triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                    fill(125);
                }else{
                    fill(150);
                    triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                    fill(225);
                    triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                    fill(175);
                }
                rect(xx,yy,36,36);
                if(ind<Recipes.length){
                    drawItem(Recipes[ind].result,xx+3,yy+3);
                }
                if(selX===x&&selY===y&&!onCrafting){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
                ind++;
            }
            textAlign(LEFT,TOP);
            var tryCraft = null;
            var elRecipe = Recipes[curRecipe];
            if(menu2==="2x2"||menu2==="3x3"){
                if(onCrafting===1){
                    tryCraft = recipeGrid[selY*3+selX].id;
                }else{
                    tryCraft = 0;
                }
            }
            if(selX!==null&&(((menu2==="2x2"||menu2==="3x3")&&((selY*9+selX<recipeBook.length&&recipeBook[selY*9+selX])||onCrafting!==0)&&(tryCraft!==0||onCrafting!==1)&&(elRecipe.result.id!==0||onCrafting!==2))||
            (menu2==="Furnace"&&((selY*9+selX<recipeBook.length&&recipeBook[selY*9+selX])||onCrafting!==0)))){
                fill(0,0,0,150);
                textSize(20);
                if(debugMode){
                    rect(mX+10,mY-25,150,50);
                    fill(255);
                    switch(menu2){
                case "2x2":case "3x3":
                    if(onCrafting===1){
                        text(itemName[recipeGrid[selY*3+selX].id][recipeGrid[selY*3+selX].type],mX+13,mY-25);
                        text("id: "+recipeGrid[selY*3+selX].id+":"+recipeGrid[selY*3+selX].type,mX+13,mY);
                    }else if(onCrafting===2){
                        text(itemName[Recipes[curRecipe].result.id][Recipes[curRecipe].result.type],mX+13,mY-25);
                        text("id: "+Recipes[curRecipe].result.id+":"+Recipes[curRecipe].result.type,mX+13,mY);
                    }else{
                        text(itemName[recipeBook[selY*9+selX].id][recipeBook[selY*9+selX].type],mX+13,mY-25);
                        text("id: "+recipeBook[selY*9+selX].id+":"+recipeBook[selY*9+selX].type,mX+13,mY);
                    }
                    break;
                case "Furnace":
                    if(onCrafting===1){
                        text(itemName[container[0].id][container[0].type],mX+13,mY-25);
                        text("id: "+container[0].id+":"+container[0].type,mX+13,mY);
                    }else if(onCrafting===2){
                        text("Fuel",mX+13,mY-25);
                    }else if(onCrafting===3){
                        text(itemName[Recipes[curRecipe].result.id][Recipes[curRecipe].result.type],mX+13,mY-25);
                        text("id: "+Recipes[curRecipe].result.id+":"+Recipes[curRecipe].result.type,mX+13,mY);
                    }else{
                        text(itemName[recipeBook[selY*9+selX].id][recipeBook[selY*9+selX].type],mX+13,mY-25);
                        text("id: "+recipeBook[selY*9+selX].id+":"+recipeBook[selY*9+selX].type,mX+13,mY);
                    }
                    break;
                    }
                }else{
                    rect(mX,mY-25,150,25);
                    fill(255);
                    switch(menu2){
                case "2x2":case "3x3":
                    if(onCrafting===1){
                        text(itemName[recipeGrid[selY*3+selX].id][recipeGrid[selY*3+selX].type],mX+3,mY-25);
                    }else if(onCrafting===2){
                        text(itemName[Recipes[curRecipe].result.id][Recipes[curRecipe].result.type],mX+3,mY-25);
                    }else{
                        text(itemName[recipeBook[selY*9+selX].id][recipeBook[selY*9+selX].type],mX+3,mY-25);
                    }
                    break;
                case "Furnace":
                    if(onCrafting===1){
                        text(itemName[container[0].id][container[0].type],mX+3,mY-25);
                    }else if(onCrafting===2){
                        text("Fuel",mX+3,mY-25);
                    }else if(onCrafting===3){
                        text(itemName[Recipes[curRecipe].result.id][Recipes[curRecipe].result.type],mX+3,mY-25);
                    }else{
                        text(itemName[recipeBook[selY*9+selX].id][recipeBook[selY*9+selX].type],mX+3,mY-25);
                    }
                    break;
                    }
                }
            }
            var selSlot;
            if(mouseDown&&onSlot&&onCrafting===0){
                selSlot = recipeBook[selY*9+selX];
                if(selSlot){
                    if(selY*9+selX<Recipes.length){
                        curRecipe = indexList[selY*9+selX];
                    }
                }
                mouseDown = false;
            }
            break;
        case "chest":
            var container;
            var tag = getWorldTag(invBlock[0],invBlock[1]);
            try{
            container = tag.contents;
            }catch(err){menu = "game";}
            var onSlot = false;
            noStroke();
            fill(0,0,0,150);
            rect(-width/2,-height/2,width,height);
            fill(150);
            triangle(205,-205,-205,205,205,205);
            fill(255);
            triangle(205,-205,-205,205,-205,-205);
            fill(200);
            rect(-200,-200,400,400);
            var mX = mouseX-width/2;
            var mY = mouseY-height/2;
            var onBucket = 0;
            selX = null;selY = 0;
            if(mX>-198&&mY>0&&mX<198&&mY<132){
                selX = floor((mX-198)/44)+9;
                selY = floor(mY/44)+1;
            }else if(mX>-198&&mY>152&&mX<198&&mY<196){
                selX = floor((mX-198)/44)+9;
                selY = 0;
            }else if(mX>-198&&mX<198&&mY>-176&&mY<-44){
                selX = floor((mX-198)/44)+9;
                selY = floor((mY+176)/44);
                onBucket = 1;
            }
            fill(50);
            textAlign(LEFT,TOP);
            textSize(20);
            text("Inventory",-195,-30);
            text("Chest",-195,-200);
            for(var i = 0; i < 27; i++){
                var x = i%9;
                var y = floor(i/9);
                if(container[y*9+x]===undefined){
                    container[y*9+x] = new Item(0,0,0,{});
                }
                var xx = -194+x*44,yy = y*44-172;
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(container[y*9+x],xx+3,yy+3);
                if(selX===x&&selY===y&&onBucket){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            for(var i = 0; i < 36; i++){
                var x = i%9;
                var y = floor(i/9);
                if(inv[y][x]===undefined){
                    inv[y][x] = new Item(0,0,0,{});
                }
                var xx = -194+x*44,yy = y*44-40;
                if(y===0){
                    yy = 156;
                }
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(inv[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&!onBucket){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            textAlign(LEFT,TOP);
            if(selX!==null&&(inv[selY][selX].id!==0||onBucket!==0)&&(onBucket!==1||container[selY*9+selX].id!==0)){
                fill(0,0,0,150);
                textSize(20);
                if(debugMode){
                    rect(mX+10,mY-25,150,50);
                    fill(255);
                    if(onBucket===1){
                        text(itemName[container[selY*9+selX].id][container[selY*9+selX].type],mX+13,mY-25);
                        text("id: "+container[selY*9+selX].id+":"+container[selY*9+selX].type,mX+13,mY);
                    }else{
                        text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                        text("id: "+inv[selY][selX].id+":"+inv[selY][selX].type,mX+13,mY);
                    }
                }else{
                    rect(mX,mY-25,150,25);
                    fill(255);
                    if(onBucket===1){
                        text(itemName[container[selY*9+selX].id][container[selY*9+selX].type],mX+3,mY-25);
                    }else{
                        text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                    }
                }
            }
            drawItem(curItem,mX-15,mY-15);
            var selSlot;
            if(mouseDown&&onSlot){
                if(onBucket){
                    selSlot = container[selY*9+selX];
                }else{
                    selSlot = inv[selY][selX];
                }
                if(mouseButton===LEFT){
                    if((curItem.id!==selSlot.id||curItem.type!==selSlot.type)&&(onBucket!==3||curItem.id===0)){
                        var switchItem = curItem;
                        curItem = selSlot;
                        selSlot = switchItem;
                    }else{
                        selSlot.count += curItem.count;
                        curItem.count = 0;
                        if(selSlot.count>maxStax[selSlot.id]){
                            var change = selSlot.count-maxStax[selSlot.id];
                            curItem.count = change;
                            selSlot.count = maxStax[curItem.id];
                        }
                    }
                    if(curItem.count===0){
                        curItem = new Item(0,0,0,{});
                    }
                }
                if(mouseButton===RIGHT){
                    if(curItem.id===0){
                        curItem = new Item(selSlot.id,ceil(selSlot.count/2),selSlot.type,selSlot.tag);
                        selSlot.count = floor(selSlot.count/2);
                    }else{
                        curItem.count--;
                        if(selSlot.id===0){
                            selSlot = new Item(curItem.id,1,curItem.type,curItem.tag);
                        }else if(selSlot.count<maxStax[curItem.id]&&selSlot.id===curItem.id&&selSlot.type===curItem.type){
                            selSlot.count++;
                        }else{
                            curItem.count++;
                        }
                        if(curItem.count===0){
                            curItem = new Item(0,0,0);
                        }
                    }
                }
                if(onBucket){
                    container[selY*9+selX] = selSlot;
                }else{
                    inv[selY][selX] = selSlot;
                }
                mouseDown = false;
                if(!curItem.count){
                    curItem = new Item(0,0,0);
                }
            }
            break;
        case "furnace":
            var container;
            var tag = getWorldTag(invBlock[0],invBlock[1]);
            try{
            container = tag.contents;
            }catch(err){menu = "game";}
            var onSlot = false;
            noStroke();
            fill(0,0,0,150);
            rect(-width/2,-height/2,width,height);
            fill(150);
            triangle(205,-205,-205,205,205,205);
            fill(255);
            triangle(205,-205,-205,205,-205,-205);
            fill(200);
            rect(-200,-200,400,400);
            var mX = mouseX-width/2;
            var mY = mouseY-height/2;
            var onBucket = 0;
            selX = 0;selY = 0;
            if(mX>-198&&mY>0&&mX<198&&mY<132){
                selX = floor((mX-198)/44)+9;
                selY = floor(mY/44)+1;
            }else if(mX>-198&&mY>152&&mX<198&&mY<196){
                selX = floor((mX-198)/44)+9;
                selY = 0;
            }else if(mX>-88&&mX<-44&&mY>-176&&mY<-132){
                onBucket = 1;
            }else if(mX>-88&&mX<-44&&mY>-88&&mY<-44){
                onBucket = 2;
            }else if(mX>44&&mX<88&&mY>-132&&mY<-88){
                onBucket = 3;
            }else{
                selX = null;
                selY = null;
            }
            //println(onBucket);
            //println(curItem.id+", "+curItem.type);
            //println(container[0].id+", "+container[1].id+", "+container[2].id);
            var xx = -84, yy = -172;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[0],xx+3,yy+3);
            if(onBucket===1){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            var xx = -84, yy = -84;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[1],xx+3,yy+3);
            if(onBucket===2){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            var xx = 48, yy = -128;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(container[2],xx+3,yy+3);
            if(onBucket===3){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            button("",xx,yy+66,36,36,0,0);
            fill(20,50,40);
            quad(xx+3,yy+89,xx+13,yy+99,xx+33,yy+89,xx+23,yy+79);
            triangle(xx+3,yy+82,xx+13,yy+89,xx+3,yy+89);
            fill(200);
            quad(xx+5,yy+89,xx+13,yy+97,xx+13,yy+92,xx+4,yy+82);
            fill(230);
            quad(xx+13,yy+97,xx+13,yy+92,xx+30,yy+84,xx+30,yy+89);
            fill(100,200,150);
            quad(xx+3,yy+82,xx+13,yy+92,xx+33,yy+82,xx+23,yy+72);
            fill(100,0,0);
            quad(xx+10,yy+88,xx+12,yy+90,xx+6,yy+96,xx+4,yy+94);
            stroke(0,0,0,100);
            noFill();
            quad(xx+22,yy+74,xx+30,yy+82,xx+20,yy+86,xx+12,yy+78);
            line(xx+24,yy+76,xx+15,yy+81);
            line(xx+27,yy+79,xx+17,yy+83);
            line(xx+19,yy+75,xx+27,yy+83);
            line(xx+15,yy+77,xx+23,yy+84);
            noStroke();
            fill(50);
            textAlign(LEFT,TOP);
            textSize(20);
            text("Inventory",-195,-30);
            textAlign(CENTER,TOP);
            text("Furnace",0,-200);
            fill(0,0,0,50);
            rect(-30,-118,50,16);
            triangle(20,-127,35,-110,20,-93);
            xx = -66;yy = -95;
            for(var i = 0; i < 30; i++){
                rect(xx+sin(i*15-60)*2-5+i/8,yy-i,8-i/4,1);
                rect(xx+sin(i*15+40)*2-5+i/8-12,yy-i,8-i/4,1);
                rect(xx+sin(i*15-180)*2-5+i/8+12,yy-i,8-i/4,1);
            }
            xx = -68;yy = -97;
            for(var i = 0; i < 30*tag.fuel/tag.maxFuel; i++){
                fill(255, 100, 0);
                rect(xx+sin(i*15-60)*2-5+i/8,yy-i,8-i/4,1);
                rect(xx+sin(i*15+40)*2-5+i/8-12,yy-i,8-i/4,1);
                rect(xx+sin(i*15-180)*2-5+i/8+12,yy-i,8-i/4,1);
                if(i<20){
                fill(255,200,0);
                rect(xx+sin(i*15-60)*2-4+i/8,yy-i,6-i/4,1);
                rect(xx+sin(i*15+40)*2-4+i/8-12,yy-i,6-i/4,1);
                rect(xx+sin(i*15-180)*2-4+i/8+12,yy-i,6-i/4,1);
                if(i<10){
                fill(255, 255, 199);
                rect(xx+sin(i*15-60)*2-3+i/8,yy-i,4-i/3,1);
                rect(xx+sin(i*15+40)*2-3+i/8-12,yy-i,4-i/3,1);
                rect(xx+sin(i*15-180)*2-3+i/8+12,yy-i,4-i/3,1);
                }}
            }
            fill(255);
            var l = tag.progress*13/120;
            if(l<50){
                rect(-30,-120,l,16);
            }else{
                l = l-30;
                rect(-30,-120,50,16);
                quad(20,-129,20,-95,l,-80-l*15/17,l,-144+l*15/17);
            }
            if(f[0]){
                menu = "recipes";
                menu2 = "Furnace";
                f[0] = false;
                mouseDown = false;
                curRecipe = 0;
            }
            for(var i = 0; i < 36; i++){
                var x = i%9;
                var y = floor(i/9);
                if(inv[y][x]===undefined){
                    inv[y][x] = new Item(0,0,0,{});
                }
                var xx = -194+x*44,yy = y*44-40;
                if(y===0){
                    yy = 156;
                }
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(inv[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&!onBucket){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            textAlign(LEFT,TOP);
            if(selX!==null&&(inv[selY][selX].id!==0||onBucket!==0)&&(container[0].id!==0||onBucket!==1)&&(container[1].id!==0||onBucket!==2)&&(container[2].id!==0||onBucket!==3)){
                fill(0,0,0,150);
                textSize(20);
                if(debugMode){
                    rect(mX+10,mY-25,150,50);
                    fill(255);
                    if(onBucket){
                        text(itemName[container[onBucket-1].id][container[onBucket-1].type],mX+13,mY-25);
                        text("id: "+container[onBucket-1].id+":"+container[onBucket-1].type,mX+13,mY);
                    }else{
                        text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                        text("id: "+inv[selY][selX].id+":"+inv[selY][selX].type,mX+13,mY);
                    }
                }else{
                    rect(mX,mY-25,150,25);
                    fill(255);
                    if(onBucket){
                        text(itemName[container[onBucket-1].id][container[onBucket-1].type],mX+3,mY-25);
                    }else{
                        text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                    }
                }
            }
            drawItem(curItem,mX-15,mY-15);
            var selSlot;
            if(mouseDown&&onSlot){
                if(onBucket){
                    selSlot = container[onBucket-1];
                }else{
                    selSlot = inv[selY][selX];
                }
                if(mouseButton===LEFT){
                    if((curItem.id!==selSlot.id||curItem.type!==selSlot.type)&&(onBucket!==3||curItem.id===0)){
                        var switchItem = curItem;
                        curItem = selSlot;
                        selSlot = switchItem;
                    }else{
                        if(onBucket===3&&selSlot.id===curItem.id&&selSlot.type===curItem.type){
                            curItem.count += selSlot.count;
                            selSlot.count = 0;
                            if(curItem.count>maxStax[curItem.id]){
                                var change = curItem.count-maxStax[curItem.id];
                                selSlot.count = change;
                                curItem.count = maxStax[curItem.id];
                            }
                        }else if(onBucket!==3){
                            selSlot.count += curItem.count;
                            curItem.count = 0;
                            if(selSlot.count>maxStax[selSlot.id]){
                                var change = selSlot.count-maxStax[selSlot.id];
                                curItem.count = change;
                                selSlot.count = maxStax[curItem.id];
                            }
                        }
                    }
                    if(curItem.count===0){
                        curItem = new Item(0,0,0,{});
                    }
                }
                if(mouseButton===RIGHT){
                    if(curItem.id===0){
                        curItem = new Item(selSlot.id,ceil(selSlot.count/2),selSlot.type,selSlot.tag);
                        selSlot.count = floor(selSlot.count/2);
                    }else if(onBucket===3){
                        selSlot.count--;
                        if(curItem.count<maxStax[curItem.id]&&curItem.id===selSlot.id&&selSlot.type===curItem.type){
                            curItem.count++;
                        }else{
                            selSlot.count++;
                        }
                        if(curItem.count===0){
                            curItem = new Item(0,0,0);
                        }
                    }else{
                        curItem.count--;
                        if(selSlot.id===0){
                            selSlot = new Item(curItem.id,1,curItem.type,curItem.tag);
                        }else if(selSlot.count<maxStax[curItem.id]&&selSlot.id===curItem.id&&selSlot.type===curItem.type){
                            selSlot.count++;
                        }else{
                            curItem.count++;
                        }
                        if(curItem.count===0){
                            curItem = new Item(0,0,0);
                        }
                    }
                }
                if(onBucket){
                    container[onBucket-1] = selSlot;
                }else{
                    inv[selY][selX] = selSlot;
                }
                mouseDown = false;
                if(!curItem.count){
                    curItem = new Item(0,0,0);
                }
            }
            break;
        case "crafting":
            var onSlot = false;
            noStroke();
            fill(0,0,0,150);
            rect(-width/2,-height/2,width,height);
            fill(150);
            triangle(205,-205,-205,205,205,205);
            fill(255);
            triangle(205,-205,-205,205,-205,-205);
            fill(200);
            rect(-200,-200,400,400);
            var mX = mouseX-width/2;
            var mY = mouseY-height/2;
            var onCrafting = 0;
            if(mX>-198&&mY>0&&mX<198&&mY<132){
                selX = floor((mX-198)/44)+9;
                selY = floor(mY/44)+1;
            }else if(mX>-198&&mY>152&&mX<198&&mY<196){
                selX = floor((mX-198)/44)+9;
                selY = 0;
            }else if(mX>-110&&mX<22&&mY>-172&&mY<-44){
                selX = floor((mX+110)/44);
                selY = floor((mY+176)/44);
                onCrafting = 1;
            }else if(mX>66&&mX<110&&mY>-132&&mY<-88){
                onCrafting = 2;
                selX = 0;
                selY = 0;
            }else{
                selX = null;
                selY = null;
            }
            var result = new Item(0,0,0);
            for(var i = 0; i < 9; i++){
                var x = i%3;
                var y = floor(i/3);
                if(craftGrid[y][x]===undefined){
                    craftGrid[y][x] = new Item(0,0,0);
                }
                var xx = -106+x*44,yy = y*44-172;
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(craftGrid[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&onCrafting===1){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            for(var j = 0; j < Recipes.length; j++){
                if(Recipes[j].type==="craft"){
                    if(Recipes[j].shapeless){
                        var good = 0;
                        var found = [];
                        for(var i = 0; i < 9; i++){
                            for(var k = 0; k < 9; k++){
                                if(!found[k]){
                                var elTypo;
                                if(Recipes[j].types){
                                    elTypo = Recipes[j].types[i];
                                }
                                var elBlocko = Recipes[j].recipe[i];
                                if(!elBlocko){
                                    elBlocko = 0;
                                }
                                if((elTypo===craftGrid[floor(k/3)][k%3].type||elTypo===undefined)&&elBlocko===craftGrid[floor(k/3)][k%3].id){
                                    good++;
                                    found[k] = true;
                                    k = 10;
                                }
                                }
                            }
                        }
                        if(good===9){
                            result = Recipes[j].result;
                            break;
                        }
                    }else{
                        var h = Recipes[j].recipe.length;
                        var w = Recipes[j].recipe[0].length;
                for(var a = 0; a < 4-h; a++){
                    for(var b = 0; b < 4-w; b++){
                        var countA = 0;
                        var countB = 0;
                        for(var y = 0; y < 3; y++){
                            for(var x = 0; x < 3; x++){
                                var comp = 0;
                                var comptype = null;
                                if(y>=a&&y<a+h&&x>=b&&x<b+w){
                                    comp = Recipes[j].recipe[y-a][x-b];
                                    if(Recipes[j].types&&Recipes[j].types[y-a]){
                                        comptype = Recipes[j].types[y-a][x-b];
                                    }
                                }
                                if(comp===craftGrid[y][x].id&&(comptype===craftGrid[y][x].type||comptype===null)){
                                    countA++;
                                }
                            }
                            for(var x = 0; x < 3; x++){
                                var comp = 0;
                                var comptype = null;
                                if(y>=a&&y<a+h&&x>=b&&x<b+w){
                                    comp = Recipes[j].recipe[y-a][x-b];
                                    if(Recipes[j].types&&Recipes[j].types[y-a]){
                                        comptype = Recipes[j].types[y-a][x-b];
                                    }
                                }
                                if(comp===craftGrid[y][2-x].id&&(comptype===craftGrid[y][2-x].type||comptype===null)){
                                    countB++;
                                }
                            }
                        }
                        if(countA===9||countB===9){
                            result = Recipes[j].result;
                            a = 5;
                            b = 5;
                        }
                    }
                }
                    }
                }
            }
            fill(0,0,0,50);
            rect(25,-118,20,16);
            triangle(45,-127,60,-110,45,-93);
            var xx = 70, yy = -128;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(result,xx+3,yy+3);
            if(onCrafting===2){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            button("",xx,yy+66,36,36,0,0);
            fill(20,50,40);
            quad(xx+3,yy+89,xx+13,yy+99,xx+33,yy+89,xx+23,yy+79);
            triangle(xx+3,yy+82,xx+13,yy+89,xx+3,yy+89);
            fill(200);
            quad(xx+5,yy+89,xx+13,yy+97,xx+13,yy+92,xx+4,yy+82);
            fill(230);
            quad(xx+13,yy+97,xx+13,yy+92,xx+30,yy+84,xx+30,yy+89);
            fill(100,200,150);
            quad(xx+3,yy+82,xx+13,yy+92,xx+33,yy+82,xx+23,yy+72);
            fill(100,0,0);
            quad(xx+10,yy+88,xx+12,yy+90,xx+6,yy+96,xx+4,yy+94);
            stroke(0,0,0,100);
            noFill();
            quad(xx+22,yy+74,xx+30,yy+82,xx+20,yy+86,xx+12,yy+78);
            line(xx+24,yy+76,xx+15,yy+81);
            line(xx+27,yy+79,xx+17,yy+83);
            line(xx+19,yy+75,xx+27,yy+83);
            line(xx+15,yy+77,xx+23,yy+84);
            noStroke();
            fill(50);
            textAlign(LEFT,TOP);
            textSize(20);
            text("Inventory",-195,-30);
            text("Crafting",-110,-200);
            if(f[0]){
                curRecipe = 0;
                menu = "recipes";
                menu2 = "3x3";
                f[0] = false;
                mouseDown = false;
            }
            for(var i = 0; i < 36; i++){
                var x = i%9;
                var y = floor(i/9);
                if(inv[y][x]===undefined){
                    inv[y][x] = new Item(0,0,0,{});
                }
                var xx = -194+x*44,yy = y*44-40;
                if(y===0){
                    yy = 156;
                }
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(inv[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&!onCrafting){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            textAlign(LEFT,TOP);
            var tryCraft;
            if(onCrafting===1&&craftGrid[selY]!==undefined&&craftGrid[selY][selX]!==undefined){
                tryCraft = craftGrid[selY][selX].id;
            }else{
                tryCraft = 0;
            }
            if(selX!==null&&(inv[selY][selX].id!==0||onCrafting!==0)&&(tryCraft!==0||onCrafting!==1)&&(result.id!==0||onCrafting!==2)){
                fill(0,0,0,150);
                textSize(20);
                if(debugMode){
                    rect(mX+10,mY-25,150,50);
                    fill(255);
                    if(onCrafting===1){
                    text(itemName[craftGrid[selY][selX].id][craftGrid[selY][selX].type],mX+13,mY-25);
                    text("id: "+craftGrid[selY][selX].id+":"+craftGrid[selY][selX].type,mX+13,mY);
                    }else if(onCrafting===2){
                        text(itemName[result.id][result.type],mX+13,mY-25);
                        text("id: "+result.id+":"+result.type,mX+13,mY-25);
                    }else{
                    text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+13,mY-25);
                    text("id: "+inv[selY][selX].id+":"+inv[selY][selX].type,mX+13,mY);
                    }
                }else{
                    rect(mX,mY-25,150,25);
                    fill(255);
                    if(onCrafting===1){
                    text(itemName[craftGrid[selY][selX].id][craftGrid[selY][selX].type],mX+3,mY-25);
                    }else if(onCrafting===2){
                        text(itemName[result.id][result.type],mX+3,mY-25);
                    }else{
                    text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                    }
                }
            }
            drawItem(curItem,mX-15,mY-15);
            var selSlot;
            if(mouseDown&&onSlot&&onCrafting<2){
                if(onCrafting===1){
                    selSlot = craftGrid[selY][selX];
                }else{
                    selSlot = inv[selY][selX];
                }
                if(mouseButton===LEFT){
                    if(curItem.id!==selSlot.id||curItem.type!==selSlot.type){
                        var switchItem = curItem;
                        curItem = selSlot;
                        selSlot = switchItem;
                    }else{
                        selSlot.count += curItem.count;
                        curItem.count = 0;
                        if(selSlot.count>maxStax[selSlot.id]){
                            var change = selSlot.count-maxStax[selSlot.id];
                            curItem.count = change;
                            selSlot.count = maxStax[selSlot.id];
                        }
                    }
                    if(curItem.count===0){
                        curItem = new Item(0,0,0,{});
                    }
                }
                if(mouseButton===RIGHT){
                    if(curItem.id===0){
                        curItem = new Item(selSlot.id,ceil(selSlot.count/2),selSlot.type,selSlot.tag);
                        selSlot.count = floor(selSlot.count/2);
                    }else{
                        curItem.count--;
                        if(selSlot.id===0){
                            selSlot = new Item(curItem.id,1,curItem.type,curItem.tag);
                        }else if(selSlot.count<maxStax[curItem.id]&&selSlot.id===curItem.id&&selSlot.type===curItem.type){
                            selSlot.count++;
                        }else{
                            curItem.count++;
                        }
                        if(curItem.count===0){
                            curItem = new Item(0,0,0);
                        }
                    }
                }
                if(onCrafting){
                    craftGrid[selY][selX] = selSlot;
                }else{
                    inv[selY][selX] = selSlot;
                }
                mouseDown = false;
            }else if(mouseDown&&onCrafting===2&&mouseButton===LEFT&&result.id!==0){
                if(curItem.id===0||(curItem.id===result.id&&curItem.type===result.type&&curItem.count+result.count<=maxStax[curItem.id])){
                    curItem = new Item(result.id,result.count+curItem.count,result.type,result.tag);
                    for(var i = 0; i < 9; i++){
                        craftGrid[floor(i/3)][i%3].count--;
                        if(craftGrid[floor(i/3)][i%3].count<=0){
                            craftGrid[floor(i/3)][i%3] = new Item(0,0,0);
                        }
                    }
                }
                mouseDown = false;
            }
            break;
        case "inventory":
            var onSlot = false;
            noStroke();
            fill(0,0,0,150);
            rect(-width/2,-height/2,width,height);
            fill(150);
            triangle(205,-205,-205,205,205,205);
            fill(255);
            triangle(205,-205,-205,205,-205,-205);
            fill(200);
            rect(-200,-200,400,400);
            var mX = mouseX-width/2;
            var mY = mouseY-height/2;
            var onCrafting = 0;
            if(mX>-198&&mY>0&&mX<198&&mY<132){
                selX = floor((mX-198)/44)+9;
                selY = floor(mY/44)+1;
            }else if(mX>-198&&mY>152&&mX<198&&mY<196){
                selX = floor((mX-198)/44)+9;
                selY = 0;
            }else if(mX>22&&mX<110&&mY>-154&&mY<-66){
                selX = floor((mX-22)/44);
                selY = floor((mY+154)/44);
                onCrafting = 1;
            }else if(mX>154&&mX<198&&mY>-132&&mY<-88){
                onCrafting = 2;
                selX = 0;
                selY = 0;
            }else{
                selX = null;
                selY = null;
            }
            for(var i = 0; i < 4; i++){
                var x = i%2;
                var y = floor(i/2);
                if(craftGrid[y][x]===undefined){
                    craftGrid[y][x] = new Item(0,0,0,{});
                }
                var xx = 26+x*44,yy = y*44-150;
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(craftGrid[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&onCrafting===1){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            var result = new Item(0,0,0);
            for(var j = 0; j < Recipes.length; j++){
                if(Recipes[j].type==="craft"){
                    if(Recipes[j].shapeless){
                        var good = 0;
                        var found = [];
                        for(var i = 0; i < 9; i++){
                            for(var k = 0; k < 9; k++){
                                if(!found[k]){
                                var elTypo;
                                if(Recipes[j].types){
                                    elTypo = Recipes[j].types[i];
                                }
                                var elBlocko = Recipes[j].recipe[i];
                                if(!elBlocko){
                                    elBlocko = 0;
                                }
                                if((elTypo===craftGrid[floor(k/3)][k%3].type||elTypo===undefined)&&elBlocko===craftGrid[floor(k/3)][k%3].id){
                                    good++;
                                    found[k] = true;
                                    k = 10;
                                }
                                }
                            }
                        }
                        if(good===9){
                            result = Recipes[j].result;
                            break;
                        }
                    }else{
                        var h = Recipes[j].recipe.length;
                        var w = Recipes[j].recipe[0].length;
                for(var a = 0; a < 4-h; a++){
                    for(var b = 0; b < 4-w; b++){
                        var countA = 0;
                        var countB = 0;
                        for(var y = 0; y < 3; y++){
                            for(var x = 0; x < 3; x++){
                                var comp = 0;
                                var comptype = null;
                                if(y>=a&&y<a+h&&x>=b&&x<b+w){
                                    comp = Recipes[j].recipe[y-a][x-b];
                                    if(Recipes[j].types&&Recipes[j].types[y-a]){
                                        comptype = Recipes[j].types[y-a][x-b];
                                    }
                                }
                                if(comp===craftGrid[y][x].id&&(comptype===craftGrid[y][x].type||comptype===null)){
                                    countA++;
                                }
                            }
                            for(var x = 0; x < 3; x++){
                                var comp = 0;
                                var comptype = null;
                                if(y>=a&&y<a+h&&x>=b&&x<b+w){
                                    comp = Recipes[j].recipe[y-a][x-b];
                                    if(Recipes[j].types&&Recipes[j].types[y-a]){
                                        comptype = Recipes[j].types[y-a][x-b];
                                    }
                                }
                                if(comp===craftGrid[y][2-x].id&&(comptype===craftGrid[y][2-x].type||comptype===null)){
                                    countB++;
                                }
                            }
                        }
                        if(countA===9||countB===9){
                            result = Recipes[j].result;
                            a = 5;
                            b = 5;
                        }
                    }
                }
                    }
                }
            }
            fill(0,0,0,50);
            rect(115,-118,20,16);
            triangle(135,-127,150,-110,135,-93);
            var xx = 158, yy = -128;
            fill(150);
            triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
            fill(225);
            triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
            fill(175);
            rect(xx,yy,36,36);
            drawItem(result,xx+3,yy+3);
            fill(50);
            textAlign(LEFT,TOP);
            textSize(20);
            text("Crafting",22,-180);
            fill(150);
            rect(-154,-198,132,176);
            fill(255);
            triangle(-22,-22,-154,-22,-22,-154);
            triangle(-22,-198,-88,-115,-22,-98);
            fill(0);
            rect(-149,-193,122,166);
            var ocx = cx, ocy = cy, osx = sx, osy = sy, omx = player.mx;
            sx = 0;cx = 1;sy = 0;cy = 1;
            player.leg-=10;
            player.mx = 3;
            translate(-111,-114);
            scale(2);
            player.direction = -atan2(mY+155,mX+88);
            drawEntity(player,0,0);
            sx = osx;cx = ocx;sy = osy;cy = ocy;
            resetMatrix();
            translate(width/2,height/2);
            player.mx = omx;
            if(onCrafting===2){
                fill(255,255,255,100);
                rect(xx-4,yy-4,44,44);
                onSlot = true;
            }
            xx = 46;
            yy = -118;
            button("",xx,yy+66,36,36,0,0);
            fill(20,50,40);
            quad(xx+3,yy+89,xx+13,yy+99,xx+33,yy+89,xx+23,yy+79);
            triangle(xx+3,yy+82,xx+13,yy+89,xx+3,yy+89);
            fill(200);
            quad(xx+5,yy+89,xx+13,yy+97,xx+13,yy+92,xx+4,yy+82);
            fill(230);
            quad(xx+13,yy+97,xx+13,yy+92,xx+30,yy+84,xx+30,yy+89);
            fill(100,200,150);
            quad(xx+3,yy+82,xx+13,yy+92,xx+33,yy+82,xx+23,yy+72);
            fill(100,0,0);
            quad(xx+10,yy+88,xx+12,yy+90,xx+6,yy+96,xx+4,yy+94);
            stroke(0,0,0,100);
            noFill();
            quad(xx+22,yy+74,xx+30,yy+82,xx+20,yy+86,xx+12,yy+78);
            line(xx+24,yy+76,xx+15,yy+81);
            line(xx+27,yy+79,xx+17,yy+83);
            line(xx+19,yy+75,xx+27,yy+83);
            line(xx+15,yy+77,xx+23,yy+84);
            noStroke();
            if(f[0]){
                curRecipe = 0;
                menu = "recipes";
                menu2 = "2x2";
                f[0] = false;
                mouseDown = false;
            }
            for(var i = 0; i < 36; i++){
                var x = i%9;
                var y = floor(i/9);
                if(inv[y][x]===undefined){
                    inv[y][x] = new Item(0,0,0,{});
                }
                var xx = -194+x*44,yy = y*44-40;
                if(y===0){
                    yy = 156;
                }
                fill(150);
                triangle(xx+40,yy-4,xx-4,yy-4,xx-4,yy+40);
                fill(225);
                triangle(xx+40,yy-4,xx-4,yy+40,xx+40,yy+40);
                fill(175);
                rect(xx,yy,36,36);
                drawItem(inv[y][x],xx+3,yy+3);
                if(selX===x&&selY===y&&!onCrafting){
                    fill(255,255,255,100);
                    rect(xx-4,yy-4,44,44);
                    onSlot = true;
                }
            }
            textAlign(LEFT,TOP);
            var tryCraft;
            if(onCrafting===1&&craftGrid[selY]!==undefined&&craftGrid[selY][selX]!==undefined){
                tryCraft = craftGrid[selY][selX].id;
            }else{
                tryCraft = 0;
            }
            if(selX!==null&&(inv[selY][selX].id!==0||onCrafting!==0)&&(tryCraft!==0||onCrafting!==1)&&(result.id!==0||onCrafting!==2)){
                fill(0,0,0,150);
                textSize(20);
                if(debugMode){
                    rect(mX+10,mY-25,150,50);
                    fill(255);
                    if(onCrafting===1){
                    text(itemName[craftGrid[selY][selX].id][craftGrid[selY][selX].type],mX+13,mY-25);
                    text("id: "+craftGrid[selY][selX].id+":"+craftGrid[selY][selX].type,mX+13,mY);
                    }else if(onCrafting===2){
                        text(itemName[result.id][result.type],mX+13,mY-25);
                        text("id: "+result.id+":"+result.type,mX+13,mY-25);
                    }else{
                    text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+13,mY-25);
                    text("id: "+inv[selY][selX].id+":"+inv[selY][selX].type,mX+13,mY);
                    }
                }else{
                    rect(mX,mY-25,150,25);
                    fill(255);
                    if(onCrafting===1){
                    text(itemName[craftGrid[selY][selX].id][craftGrid[selY][selX].type],mX+3,mY-25);
                    }else if(onCrafting===2){
                        text(itemName[result.id][result.type],mX+3,mY-25);
                    }else{
                    text(itemName[inv[selY][selX].id][inv[selY][selX].type],mX+3,mY-25);
                    }
                }
            }
            drawItem(curItem,mX-15,mY-15);
            var selSlot;
            if(mouseDown&&onSlot&&onCrafting<2){
                if(onCrafting===1){
                    selSlot = craftGrid[selY][selX];
                }else{
                    selSlot = inv[selY][selX];
                }
                if(mouseButton===LEFT){
                    if(curItem.id!==selSlot.id||curItem.type!==selSlot.type){
                        var switchItem = curItem;
                        curItem = selSlot;
                        selSlot = switchItem;
                    }else{
                        selSlot.count += curItem.count;
                        curItem.count = 0;
                        if(selSlot.count>maxStax[selSlot.id]){
                            var change = selSlot.count-maxStax[selSlot.id];
                            curItem.count = change;
                            selSlot.count = maxStax[selSlot.id];
                        }
                    }
                    if(curItem.count===0){
                        curItem = new Item(0,0,0,{});
                    }
                }
                if(mouseButton===RIGHT){
                    if(curItem.id===0){
                        curItem = new Item(selSlot.id,ceil(selSlot.count/2),selSlot.type,selSlot.tag);
                        selSlot.count = floor(selSlot.count/2);
                    }else{
                        curItem.count--;
                        if(selSlot.id===0){
                            selSlot = new Item(curItem.id,1,curItem.type,curItem.tag);
                        }else if(selSlot.count<maxStax[curItem.id]&&selSlot.id===curItem.id&&selSlot.type===curItem.type){
                            selSlot.count++;
                        }else{
                            curItem.count++;
                        }
                        if(curItem.count===0){
                            curItem = new Item(0,0,0);
                        }
                    }
                }
                if(onCrafting){
                    craftGrid[selY][selX] = selSlot;
                }else{
                    inv[selY][selX] = selSlot;
                }
                mouseDown = false;
            }else if(mouseDown&&onCrafting===2&&mouseButton===LEFT&&result.id!==0){
                if(curItem.id===0||(curItem.id===result.id&&curItem.type===result.type&&curItem.count+result.count<=maxStax[curItem.id])){
                    curItem = new Item(result.id,result.count+curItem.count,result.type,result.tag);
                    for(var i = 0; i < 9; i++){
                        craftGrid[floor(i/3)][i%3].count--;
                        if(craftGrid[floor(i/3)][i%3].count<=0){
                            craftGrid[floor(i/3)][i%3] = new Item(0,0,0);
                        }
                    }
                }
                mouseDown = false;
            }
            break;
    }
    sX -= (player.x+18+sX)/5;
    sY += (player.y+1-sY)/5;
    if(menu==="game"){
        xRot -= atan((mouseX-width/2)/4000)+xRot/5;
        yRot -= -atan((mouseY-height/2)/4000)+yRot/5;
    }
    mxRot -= (atan(player.mx/10)+mxRot)/20;
    myRot -= (atan(player.my/10)+myRot)/20;
    if(xRot>45){xRot=45;}
    if(xRot<-45){xRot=-45;}
    if(yRot>45){yRot=45;}
    if(yRot<-45){yRot=-45;}
    //If you uncomment this, you'll make Bennimus cry.
    /*
    for(var i = 0; i < world.length; i++){
        for(var j = 0; j < world[i].length; j++){
            if(getWorld(j,i)===16){
                stroke(0,255,255);
                line3(0,0,0,j*40+sX+20,-i*40+sY+20,0);
            }
        }
    }
    */
    resetMatrix();
    textAlign(LEFT,TOP);
    }
    for(var i = 0; i < keys.length; i++){
        pkeys[i] = keys[i];
    }
};
