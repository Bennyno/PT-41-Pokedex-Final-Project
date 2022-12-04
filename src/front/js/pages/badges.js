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
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/d/dd/Boulder_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/9/9c/Cascade_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/a/a6/Thunder_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/b/b5/Rainbow_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/7d/Soul_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/6/6b/Marsh_Badge.png"></img></td>
            
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/1/12/Volcano_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/78/Earth_Badge.png"></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Johto Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/4/4a/Zephyr_Badge.png"></img></td>
                
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
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/9/97/Knuckle_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/3/34/Dynamo_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/c4/Heat_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/6/63/Balance_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/6/62/Feather_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/c/cc/Mind_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/9/9b/Rain_Badge.png"></img></td>
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
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/f/fe/Mine_Badge.png"></img></td>

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
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/3/39/Cliff_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/d/d4/Rumble_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/7/7d/Plant_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/f/fc/Voltage_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/d/d1/Fairy_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/1/13/Psychic_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/8/84/Iceberg_Badge.png"></img></td>
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
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/e/e3/GalarFairy_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/3/3e/Rock_Badge.png"></img></td>
                
                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/4/43/Ice_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/4/4d/Dark_Badge.png"></img></td>

                <td><img className ="badges" src="https://archives.bulbagarden.net/media/upload/2/27/Dragon_Badge.png"></img></td>
                </tr>
            </tr>
        </table>
        </div>
        </div>
    )
}