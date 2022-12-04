import React, { useEffect, useContext, useState } from "react";

export const Badges = () => {
   
    return(
        <div className="full-screen bg-badges">
        <div className="container gym-badges">
        <h1 className="page-title"><strong>Badges</strong></h1>
        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Kanto Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://cdn2.bulbagarden.net/upload/d/dd/Boulder_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/thumb/9/9c/Cascade_Badge.png/900px-Cascade_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://www.pikpng.com/pngl/b/340-3405650_pokemon-badge-png.png"></img></td>
                
                <td><img className ="badges" src="https://i1.wp.com/press.invincible.ink/wp-content/uploads/2019/01/badges_06_rainbow-300x300.png?ssl=1"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/7d/Soul_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://cdn2.bulbagarden.net/upload/thumb/6/6b/Marsh_Badge.png/600px-Marsh_Badge.png"></img></td>
            
                <td><img className ="badges" src="https://webstockreview.net/images/pokemon-clipart-badges-3.png"></img></td>
                
                <td><img className ="badges" src="https://vignette.wikia.nocookie.net/pokemonlp-utomaikeru/images/7/78/Earth_Badge.png/revision/latest?cb=20160316043150"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Johto Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://stegriff.co.uk/assets/old-content/badges/files/GSC/1zephyr.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/0/08/Hive_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/a/a7/Plain_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/4/48/Fog_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/b/b9/Storm_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/7b/Mineral_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/e/e6/Glacier_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/5/58/Rising_Badge.png"></img></td>
                </tr>
            </tr>
        </table>
        
        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Hoenn Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/6/63/Stone_Badge.png"></img></td>
                
                <td><img className ="badges" src="http://img3.wikia.nocookie.net/__cb20140715005831/pokemon/images/b/b4/Knuckle_badge.png"></img></td>
                
                <td><img className ="badges" src="http://img3.wikia.nocookie.net/__cb20140715010553/pokemon/images/b/b4/Dynamo_badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/c4/Heat_Badge.png"></img></td>
                
                <td><img className ="badges" src="http://img3.wikia.nocookie.net/__cb20140715173933/pokemon/images/a/af/Balance_badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/6/62/Feather_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/cc/Mind_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://2img.net/h/archives.bulbagarden.net/media/upload/9/9b/Rain_Badge.png"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Sinnoh Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/0/0b/Coal_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/8/8c/Forest_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/2/27/Cobble_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/1/13/Fen_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/2/28/Relic_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://cdn.staticneo.com/w/pokemon/thumb/0/00/MineBadge.png/120px-MineBadge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/0/09/Icicle_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/0/0c/Beacon_Badge.png"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Unova Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/74/Trio_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/8/85/Basic_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/8/8a/Insect_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/5/5b/Bolt_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/2/29/Quake_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/9/9c/Jet_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/a/ac/Freeze_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/c0/Legend_Badge.png"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Kalos Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/a/a5/Bug_Badge.png"></img></td>
                
                <td><img className ="badges" src="http://img2.wikia.nocookie.net/__cb20131029043723/pokemon/images/3/39/Cliff_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/d/d4/Rumble_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://cdn2.bulbagarden.net/upload/thumb/7/7d/Plant_Badge.png/100px-Plant_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://cdn2.bulbagarden.net/upload/thumb/f/fc/Voltage_Badge.png/100px-Voltage_Badge.png"></img></td>
                
                <td><img className ="badges" src="http://vignette2.wikia.nocookie.net/pokemon/images/d/d1/Fairy_Badge.png"></img></td>

                <td><img className ="badges" src="https://onehallyu.com/uploads/trophies/Psychic_Badge_125.png.912fea7d7768578aad9a29c325401b85.png"></img></td>
                
                <td><img className ="badges" src="http://img4.wikia.nocookie.net/__cb20131105162357/pokemon/images/8/84/Iceberg_Badge.png"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Galar Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/0/00/Grass_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/7a/Water_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/cc/Fire_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/2/20/Fighting_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/3/30/Ghost_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://i2.wp.com/pokemythology.net/conteudo/galeria/insignias/galar6.png"></img></td>

                <td><img className ="badges" src="https://cdn2.bulbagarden.net/upload/thumb/3/3e/Rock_Badge.png/100px-Rock_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://images.wikidexcdn.net/mwuploads/wikidex/5/5c/latest/20191117234308/Medalla_Hielo_EpEc.png"></img></td>

                <td><img className ="badges" src="https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20191117234310/Medalla_Siniestro_EpEc.png"></img></td>

                <td><img className ="badges" src="https://images.wikidexcdn.net/mwuploads/wikidex/3/31/latest/20191117234312/Medalla_Drag%C3%B3n_EpEc.png"></img></td>
                </tr>
            </tr>
        </table>
        </div>
        </div>
    )
}