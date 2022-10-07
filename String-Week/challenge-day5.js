const submissions = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

const filterPun = (string) => {
    const arr = string.split(',')
                .filter(el => 
                    (el === el.trim()) && // ensure that there is no whitespace before or after
                    (!el.match(/dog|bark|bone/gi)) && // doesn't include bark, bone, dog
                    (el.length % 5) && // length isn't a multiple of 5
                    ((el.charCodeAt(0) + el.charCodeAt(el.length-1)) % 2) && //sum of first and last char odd
                    (el[Math.floor(el.length / 2) + 1].toLowerCase() != 'e') && //e not after middle of string
                    (!(el.match(/[a-z]/g).length % 2)) && // even number of lowercase letters
                    (el.match(/[A-Z]/g).length > 1) && // at least two capital letters
                    (!el.match(/S/g)) // no uppercase s
                )
    return arr
}

console.log(filterPun(submissions))