/*
 * room.info.js has got all informations about all rooms their items and volumes.
 * This file/object can be used to modify all webpage contents
 * The biggest array has got indexes of object rooms. 
 * Each room has got an Array which has got an index of items.
 */

var 
    gl_room_info = [                                                                                           
                     { 
                         room_name: "Kitchen",
                         room_id: "Kitchen",
                         items: 
                         [                                     

                            {
                                item_name: "Fridge/Freezer Large",
                                item_id: "fridge_freezer_large",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fridge/Freezer Small",
                                item_id: "fridge_freezer_small",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                            {
                                item_name: "Fridge Double Door",
                                item_id: "fridge_double_door",
                                volume: 1.6,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fridge Large",
                                item_id: "fridge_large",
                                volume: 2,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fridge Small",
                                item_id: "fridge_small",
                                volume: 1,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fridge Bar",
                                item_id: "fridge_bar",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Freezer",
                                item_id: "freezer",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Freezer chest",
                                item_id: "freezer_chest",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Dishwasher",
                                item_id: "dishwasher",
                                volume: 0.65,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Microwave",
                                item_id: "microwave",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table large",
                                item_id: "table_large",
                                volume: 0.98,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table small",
                                item_id: "table_small",
                                volume: 0.38,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Kitchen Chair",
                                item_id: "kitchen_chair",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "high Chair",
                                item_id: "high_chair",
                                volume: 0.23,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bar Stool",
                                item_id: "bar_stool",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet",
                                item_id: "cabinet",
                                volume: 0.91,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet crystal",
                                item_id: "cabinet_crystal",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet China large",
                                item_id: "cabinet_china_lounge",
                                volume: 1.13,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet China small",
                                item_id: "cabinet_china_small",
                                volume: 0.68,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet dresser",
                                item_id: "cabinet_dresser", 
                                volume: 1.5,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cupboard",
                                item_id: "cupboard",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tea chest",
                                item_id: "tea_chest",
                                volume: 0.2,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tea chest half",
                                item_id: "tea_chest_half",
                                volume: 0.1,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture large",
                                item_id: "picture_large",
                                volume: 0.6,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture small",
                                item_id: "picture_small",
                                volume: 0.3,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tidy rack",
                                item_id: "tidy_rack",
                                volume: 0.3,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Vegie rack",
                                item_id: "vegie_rack",
                                volume: 0.15,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box large",
                                item_id: "box_large_tea_chest_size",
                                volume: 0.15,
                                description: "Tea Chest Size",
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box small",
                                item_id: "box_small_book_wine_size",
                                volume: 0.1,
                                description: "Book/ Wine Size",
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // kitchen article Id's
                     }, // obj kitchen 
                     {
                        room_name: "Dining Room",
                        room_id: "dining_room",
                        items: 
                        [
                             {
                                item_name: "Bookcase large",
                                item_id: "bookcase_large",
                                volume: 1.13,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bookcase small",
                                item_id: "bookcase_small",
                                volume: 0.51,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },	
                             {
                                item_name: "Bookshelf",
                                item_id: "bookshelf",
                                volume: 0.5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },											  
                             {
                                item_name: "Buffet/Sideboard",
                                item_id: "buffet_sideboard",
                                volume: 1,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },					
                             {
                                item_name: "Cabinet",
                                item_id: "cabinet",
                                volume: 0.91,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet crystal",
                                item_id: "cabinet_crystal",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet china large",
                                item_id: "cabinet_china_large",
                                volume: 1.13,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet china small",
                                item_id: "cabinet_china_small",
                                volume: 0.68,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Carpet/Rug",
                                item_id: "carpet_rug",
                                volume: 0.25,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Dining Table",
                                item_id: "dining_table_8_chairs",
                                volume: 1.45,
                                description: "8 chairs", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Dining Table",
                                item_id: "dining_table_6_chairs",
                                volume: 0.81,
                                description: "6 chairs",
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Dining Table",
                                item_id: "dining_table_4_chairs",
                                volume: 0.63,
                                description: "4 chairs", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Dining Chair",
                                item_id: "dining_chair",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture Large",
                                item_id: "picture_large",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture Small",
                                item_id: "picture_small",
                                volume: 0.3,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tea Chest",
                                item_id: "tea_chest",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },                                     
                             {
                                item_name: "Tea Chest half",
                                item_id: "tea_chest",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                            ] // dinning room ID's
                     }, // obj dinning room 
                     {
                        room_name: "Lounge",
                        room_id: "lounge",
                        items: 
                        [
                             {
                                item_name: "2 Seater Couch",
                                item_id: "2_seater_couch",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "3 Seater Couch",
                                item_id: "3_seater_couch",
                                volume: 1.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Armchair",
                                item_id: "armchair",
                                volume: 0.48,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bar",
                                item_id: "bar",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bean bag large",
                                item_id: "bean_bag_large",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bean bag small",
                                item_id: "bean_bag_small",
                                volume: 0.28,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Billard table",
                                item_id: "billard_table",
                                volume: 2.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bookcase large",
                                item_id: "bookcase_large",
                                volume: 1.13,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bookcase small",
                                item_id: "bookcase_small",
                                volume: 0.51,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Bureau",
                                item_id: "bureau",
                                volume: 0.42,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet",
                                item_id: "cabinet",
                                volume: 0.91,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet crystal",
                                item_id: "cabinet_crystal",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet china large",
                                item_id: "cabinet_china_large",
                                volume: 1.13,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet china small",
                                item_id: "cabinet_china_small",
                                volume: 0.68,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cabinet stereo",
                                item_id: "cabinet_stereo",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },	
                             {
                                item_name: "Cabinet TV",
                                item_id: "cabinet_tv",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Chair",
                                item_id: "chair",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Chair other",
                                item_id: "chair_other",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Cupboard",
                                item_id: "cupboard",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Desk",
                                item_id: "desk",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Desk roll top large",
                                item_id: "desk_roll_top_large",
                                volume: 1.27,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Desk rool top small",
                                item_id: "desk_roll_top_small",
                                volume: 0.68,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Divan",
                                item_id: "divan",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fan pedistal",
                                item_id: "fan_pedistal",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Heater",
                                item_id: "heater",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Lamp short",
                                item_id: "lamp_short",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Lamp tall",
                                item_id: "lamp_tall",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Lampshade",
                                item_id: "lamp_shade",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Magazin rack",
                                item_id: "magazin_rack",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Mirror small",
                                item_id: "mirror_small",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Mirror large",
                                item_id: "mirror_large",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Organ",
                                item_id: "organ",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Ottaman",
                                item_id: "oottaman",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Piano",
                                item_id: "piano",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Piano Stool",
                                item_id: "piano_stool",
                                volume: 2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Pictures large",
                                item_id: "pictures_large",
                                volume: 0.14,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Pictures small",
                                item_id: "pictures_small",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Rug/carpet",
                                item_id: "rug_carpet",
                                volume: 0.3,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Shelf large",
                                item_id: "shelf_large",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Shelf small",
                                item_id: "shelf_small",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Stereo",
                                item_id: "shelf_small",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table",
                                item_id: "table",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table coffee",
                                item_id: "table_coffee",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table large",
                                item_id: "table_large",
                                volume: 0.98,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table small",
                                item_id: "table_small",
                                volume: 0.38,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tea chest",
                                item_id: "tea_chest",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tea chest half",
                                item_id: "tea_chest_half",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "TV 28-32 inch",
                                item_id: "tv_28_32_inch",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "TV 36-40 inch",
                                item_id: "tv_36_40_inch",
                                volume: 0.35,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "TV 42-48 inch",
                                item_id: "tv_42_48_inch",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },  
                             {
                                item_name: "TV 50-54 inch",
                                item_id: "tv_56_60_inch",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },  
                             {
                                item_name: "Wall unit",
                                item_id: "wall_unit",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // Lounge ID's
                     },// obj Lounge
                     {
                        room_name: "Hall",
                        room_id: "hall",
                        items: 
                        [
                              {
                                item_name: "Chair",
                                item_id: "chair",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Coat Stand",
                                item_id: "coat_stand",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Dropside table",
                                item_id: "dropside_table",
                                volume: 0.42,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Glory Box",
                                item_id: "glory_box",
                                volume: 0.42,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Grandfather Clock",
                                item_id: "grandfather_clock",
                                volume: 0.55,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Half tea chest",
                                item_id: "half_tea_chest",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Hall sand",
                                item_id: "hall_sand",
                                volume: 0.42,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Hall Table",
                                item_id: "hall_table",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Piano",
                                item_id: "piano",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Piano stool",
                                item_id: "piano_stool",
                                volume: 0.14,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Picture large",
                                item_id: "picture_large",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Picture small",
                                item_id: "picture_small",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Storage chest",
                                item_id: "storage_chest",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Tea Chest",
                                item_id: "tea_chest",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },
                              {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // Hall ID's
                     }, // Obj Hall
                     {
                        room_name: "Laundry",
                        room_id: "laundry",
                        items: 
                        [
                            {
                                item_name: "Broom",
                                item_id: "broom",
                                volume: 0.03,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                            {
                                item_name: "Closet",
                                item_id: "closet",
                                volume: 0.48,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },	
                            {
                                item_name: "Clothes airer",
                                item_id: "clothes_airer",
                                volume: 0.05,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {   
                                item_name: "Clothes Dryer",
                                item_id: "clothes_dryer",
                                volume: 0.57,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Ironing Board",
                                item_id: "ironing_board",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },		
                             {
                                item_name: "Laundry basket",
                                item_id: "laundry_basket",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },			
                             {
                                item_name: "Launry trolley",
                                item_id: "ironing_board",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },		
                             {
                                item_name: "Luandry cupboard",
                                item_id: "laundry_cupboard",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },			
                             {
                                item_name: "Vacuum cleaner",
                                item_id: "vacuum_cleaner",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },					
                             {
                                item_name: "Washing mashine",
                                item_id: "washing_mashine",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },			
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },			
                             {
                                item_name: "Box small",
                                item_id: "ironing_board",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                         ] // Laundry ID's
                     },// Obj Laundry
                     {
                        room_name: "Bedroom",
                        room_id: "bedroom",
                        items: 
                        [
                             {
                                item_name: "Double Bed \& Matress",
                                item_id: "double_bed_matress",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },					
                             {
                                item_name: "Queen Bed \& Matress",
                                item_id: "queen_bed_matress",
                                volume: 2.5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {   
                                item_name: "Single Bed \& Matress",
                                item_id: "single_bed_matress",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Matress Single",
                                item_id: "matress_single",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Single Bed with Frame",
                                item_id: "single_bed_with_frame",
                                volume: 1.5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Queen Bed with Frame",
                                item_id: "queen_bed_with_frame",
                                volume: 4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "King Bed \& Base",
                                item_id: "king_bed_base",
                                volume: 5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "King Bed with Frame",
                                item_id: "king_bed_with_frame",
                                volume: 5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Small Bedhead",
                                item_id: "small_behead",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Double Bedhead",
                                item_id: "double_bedhead",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Queen Bedhead",
                                item_id: "queen_bedhead",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Matress Double",
                                item_id: "matress_double",
                                volume: 0.48,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Matress Single",
                                item_id: "matress_single",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Matress Queen",
                                item_id: "matress_queen",
                                volume: 0.55,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Matress King",
                                item_id: "matress_king",
                                volume: 0.7,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Stool",
                                item_id: "stool",
                                volume: 0.08,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Folding Bed",
                                item_id: "folding_bed",
                                volume: 0.28,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Bedside Tables",
                                item_id: "double_bedhead",
                                volume: 0.22,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Bookcase",
                                item_id: "bookcase",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Chest",
                                item_id: "chest",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Chair",
                                item_id: "chair",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Chest Drawers Large",
                                item_id: "chest_drawers_large",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Dressing Table",
                                item_id: "dressing_table",
                                volume: 0.7,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Play Pen",
                                item_id: "play_pen",
                                volume: 0.08,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Stroller",
                                item_id: "chest",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Toy Pram",
                                item_id: "toy_pram",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Book & Wine Cartoon",
                                item_id: "book_wine_cartoon",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Half Tea Chest",
                                item_id: "half_tea_chest",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Tea Chest",
                                item_id: "tea_chest",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Linen Box",
                                item_id: "linen_box",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Wardrobe",
                                item_id: "wardrobe",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Portable Robe",
                                item_id: "portable_robe",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Desk",
                                item_id: "desk",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Dressing Table \& Mirror",
                                item_id: "dressing_table_mirror",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Stand Mirror",
                                item_id: "stand_mirror",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "cot",
                                item_id: "cot",
                                volume: 0.7,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Lowboy",
                                item_id: "lowboy",
                                volume: 0.93,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Pram",
                                item_id: "pram",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Dools Cot",
                                item_id: "dolls_cot",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             }, 
                             {
                                item_name: "Dolls House",
                                item_id: "dolls_house",
                                volume: 0.35,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture small",
                                item_id: "picture_small",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture large",
                                item_id: "picture_large",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // Bedroom ID's
                     }, // Obj Bedrooom
                     {
                        room_name: "Garage \& Outside",
                        room_id: "garage_outside",
                        items: 
                        [
                             {
                                item_name: "BBQ",
                                item_id: "bbq",
                                volume: 0.75,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Childs Ride on Toy",
                                item_id: "childs_ride_on_toy",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Adults Bike",
                                item_id: "adults_bike",
                                volume: 0.55,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Childs Bike",
                                item_id: "childs_bike",
                                volume: 0.35,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Chilly Bin",
                                item_id: "chilly_bin",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Fold Chairs",
                                item_id: "fold_chairs",
                                volume: 0.75,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Small Outdoor Table",
                                item_id: "small_outdoor_table",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Large Outdoor Table",
                                item_id: "large_outdoor_table",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Ladder",
                                item_id: "ladder",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Lawn Mower",
                                item_id: "lawn_mower",
                                volume: 0.93,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Work Bench",
                                item_id: "work_bench",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Hose \& Reel",
                                item_id: "hose_reel",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Scooter",
                                item_id: "scooter",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Childs Table \& Chairs",
                                item_id: "childs_table_chairs",
                                volume: 0.17,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Patio Heater",
                                item_id: "hose_reel",
                                volume: 0.75,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Large Umbrella",
                                item_id: "large_umbrella",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "BBQ Table",
                                item_id: "bbq_table",
                                volume: 0.71,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Wadding Pool",
                                item_id: "wadding_pool",
                                volume: 0.11,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Pot Plant Small",
                                item_id: "pot_plant_small",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Pot Plant Large",
                                item_id: "pot_plant_large",
                                volume: 0.25,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Wheel Burrow",
                                item_id: "wheel_burrow",
                                volume: 0.48,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Line Trimmer",
                                item_id: "line_trimmer",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Large Bin",
                                item_id: "large_bin",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Table Tennis Table",
                                item_id: "table_tennis_table",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Trampolie (dismantled)",
                                item_id: "trampolie",
                                volume: 1.7,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Large Umbrella",
                                item_id: "large_umbrella",
                                volume: 0.45,
                                description: null,
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Garden Tools",
                                item_id: "garden_tools",
                                volume: 0.25,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Tool Box",
                                item_id: "tool_box",
                                volume: 0.18,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Trike",
                                item_id: "trike",
                                volume: 0.14,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Chest Freezer",
                                item_id: "chest_freezer",
                                volume: 1.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture small",
                                item_id: "picture_small",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Picture large",
                                item_id: "picture_large",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // Garage Outside ID's
                     }, // Obj Garage Outsite
                     {
                        room_name: "Sundries",
                        room_id: "sundries",
                        items: 
                        [
                            {
                                item_name: "A/C and Stand",
                                item_id: "a_c_and_stand",
                                volume: 0.28,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Bean Bag Large",
                                item_id: "bean_bag_large",
                                volume: 0.45,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Bean Bag Large",
                                item_id: "bean_bag_small",
                                volume: 0.28,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Bench",
                                item_id: "bench",
                                volume: 0.8,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Camp gear",
                                item_id: "camp_gear",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Computer",
                                item_id: "computer",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Cupboard",
                                item_id: "cupboard",
                                volume: 0.85,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Dehumidifier",
                                item_id: "dehumidifier",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Exercise Bike",
                                item_id: "exercise_bike",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Filing Cabinet",
                                item_id: "filing_cabinet_2_drawer",
                                volume: 0.4,
                                description: "2 drawer", 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Filing Cabinet",
                                item_id: "filing_cabinet_4_drawer",
                                volume: 0.8,
                                description: "4 drawer", 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Fish Tank",
                                item_id: "fish_tank",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Fishing Rod",
                                item_id: "fishing_rod",
                                volume: 0.06,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Folding Card Table",
                                item_id: "folding_card_table",
                                volume: 0.06,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Folding Chairs",
                                item_id: "folding_chairs",
                                volume: 0.3,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Golf Bag",
                                item_id: "golf_bag",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Guitar",
                                item_id: "guitar",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Heater",
                                item_id: "heater",
                                volume: 1.5,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Occasional Table",
                                item_id: "occasional_table",
                                volume: 0.28,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Pram",
                                item_id: "pram",
                                volume: 0.35,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Rug",
                                item_id: "rug",
                                volume: 0.25,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Saw Horse",
                                item_id: "saw_horse",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Sew Table",
                                item_id: "sew_table",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Sewing Cabinet",
                                item_id: "sewing_cabinet",
                                volume: 0.6,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Sewing Mashine",
                                item_id: "sewing_machine",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Snow Ski \'s",
                                item_id: "snow_skis",
                                volume: 0.15,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Storage Chest",
                                item_id: "storage_chest",
                                volume: 0.4,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Suitcase",
                                item_id: "suitcase",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Surfboard",
                                item_id: "surfboard",
                                volume: 0.2,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Tent",
                                item_id: "tent",
                                volume: 0.1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                            {
                                item_name: "Trestle table",
                                item_id: "trestle_table",
                                volume: 1,
                                description: null, 
                                info: "keep your body safe by Moving House Company"
                            },
                             {
                                item_name: "Box large",
                                item_id: "box_large",
                                volume: 0.15,
                                description: "Tea Chest Size", 
                                info: "keep your body safe by Moving House Company"
                             },
                             {
                                item_name: "Box small",
                                item_id: "box_small",
                                volume: 0.1,
                                description: "Book/ Wine Size", 
                                info: "keep your body safe by Moving House Company"
                             }
                        ] // Sundries ID's
                     } // Obj Sundries
        ] // Array amt
 ;