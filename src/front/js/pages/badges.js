import React, { useEffect, useContext, useState } from "react";
import Boulder from "../../img/Boulder_Badge.jpg";
import Cascade from "../../img/Cascade_Badge.png";
import Thunder from "../../img/Thunder_Badge.png";
import Rainbow from "../../img/Rainbow_Badge.png";
import Soul from "../../img/Soul_Badge.png";
import Marsh from "../../img/Marsh_Badge.png";
import Volcano from "../../img/Volcano_Badge.png";
import Earth from "../../img/Earth_Badge.png";
import Zephyr from "../../img/Zephyr_Badge.png";
import Hive from "../../img/Hive_Badge.png";
import Plain from "../../img/Plain_Badge.png";
import Fog from "../../img/Fog_Badge.png";
import Storm from "../../img/Storm_Badge.png";
import Mineral from "../../img/Mineral_Badge.png";
import Glacier from "../../img/Glacier_Badge.png";
import Rising from "../../img/Rising_Badge.png";
import Stone from "../../img/Stone_Badge.png";
import Knuckle from "../../img/Knuckle_Badge.png";
import Dynamo from "../../img/Dynamo_Badge.png";
import Heat from "../../img/Heat_Badge.png";
import Balance from "../../img/Balance_Badge.png";
import Feather from "../../img/Feather_Badge.png";
import Mind from "../../img/Mind_Badge.png";
import Rain from "../../img/Rain_Badge.png";
import Coal from "../../img/Coal_Badge.png";
import Forest from "../../img/Forest_Badge.png";
import Cobble from "../../img/Cobble_Badge.png";
import Fen from "../../img/Fen_Badge.png";
import Relic from "../../img/Relic_Badge.png";
import Mine from "../../img/Mine_Badge.png";
import Icicle from "../../img/Icicle_Badge.png";
import Beacon from "../../img/Beacon_Badge.png";
import Trio from "../../img/Trio_Badge.png";
import Basic from "../../img/Basic_Badge.png";
import Insect from "../../img/Insect_Badge.png";
import Bolt from "../../img/Bolt_Badge.png";
import Quake from "../../img/Quake_Badge.png";
import Jet from "../../img/Jet_Badge.png";
import Freeze from "../../img/Freeze_Badge.png";
import Legend from "../../img/Legend_Badge.png";
import Bug from "../../img/Bug_Badge.png";
import Cliff from "../../img/Cliff_Badge.png";
import Rumble from "../../img/Rumble_Badge.png";
import Plant from "../../img/Plant_Badge.png";
import Voltage from "../../img/Voltage_Badge.png";
import Fairy from "../../img/Fairy_Badge.png";
import Psychic from "../../img/Psychic_Badge.png";
import Iceberg from "../../img/Iceberg_Badge.png";
import Grass from "../../img/Grass_Badge.png";
import Water from "../../img/Water_Badge.png";
import Fire from "../../img/Fire_Badge.png";
import Fighting from "../../img/Fighting_Badge.png";
import Ghost from "../../img/Ghost_Badge.png";
import Galar_Fairy from "../../img/Galar_Fairy_Badge.png";
import Rock from "../../img/Rock_Badge.png";
import Ice from "../../img/Ice_Badge.png";
import Dark from "../../img/Dark_Badge.png";
import Dragon from "../../img/Dragon_Badge.png";


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
                <td><img className ="badges" src={Boulder}></img></td>
                
                <td><img className ="badges" src={Cascade}></img></td>
                
                <td><img className ="badges" src={Thunder}></img></td>
                
                <td><img className ="badges" src={Rainbow}></img></td>
                
                <td><img className ="badges" src={Soul}></img></td>
                
                <td><img className ="badges" src={Marsh}></img></td>
            
                <td><img className ="badges" src={Volcano}></img></td>
                
                <td><img className ="badges" src={Earth}></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Johto Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Zephyr}></img></td>
                
                <td><img className ="badges" src={Hive}></img></td>
                
                <td><img className ="badges" src={Plain}></img></td>
                
                <td><img className ="badges" src={Fog}></img></td>
                
                <td><img className ="badges" src={Storm}></img></td>
                
                <td><img className ="badges" src={Mineral}></img></td>

                <td><img className ="badges" src={Glacier}></img></td>
                
                <td><img className ="badges" src={Rising}></img></td>
                </tr>
            </tr>
        </table>
        
        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Hoenn Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Stone}></img></td>
                
                <td><img className ="badges" src={Knuckle}></img></td>
                
                <td><img className ="badges" src={Dynamo}></img></td>
                
                <td><img className ="badges" src={Heat}></img></td>
                
                <td><img className ="badges" src={Balance}></img></td>
                
                <td><img className ="badges" src={Feather}></img></td>

                <td><img className ="badges" src={Mind}></img></td>
                
                <td><img className ="badges" src={Rain}></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Sinnoh Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Coal}></img></td>
                
                <td><img className ="badges" src={Forest}></img></td>
                
                <td><img className ="badges" src={Cobble}></img></td>
                
                <td><img className ="badges" src={Fen}></img></td>
                
                <td><img className ="badges" src={Relic}></img></td>
                
                <td><img className ="badges" src={Mine}></img></td>

                <td><img className ="badges" src={Icicle}></img></td>
                
                <td><img className ="badges" src={Beacon}></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Unova Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Trio}></img></td>
                
                <td><img className ="badges" src={Basic}></img></td>
                
                <td><img className ="badges" src={Insect}></img></td>
                
                <td><img className ="badges" src={Bolt}></img></td>
                
                <td><img className ="badges" src={Quake}></img></td>
                
                <td><img className ="badges" src={Jet}></img></td>

                <td><img className ="badges" src={Freeze}></img></td>
                
                <td><img className ="badges" src={Legend}></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Kalos Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Bug}></img></td>
                
                <td><img className ="badges" src={Cliff}></img></td>
                
                <td><img className ="badges" src={Rumble}></img></td>
                
                <td><img className ="badges" src={Plant}></img></td>
                
                <td><img className ="badges" src={Voltage}></img></td>
                
                <td><img className ="badges" src={Fairy}></img></td>

                <td><img className ="badges" src={Psychic}></img></td>
                
                <td><img className ="badges" src={Iceberg}></img></td>
                </tr>
            </tr>
        </table>

        <table className="region-gyms">
            <tr bgcolor="gray">
                <th className="table-title">Galar Badges</th>
            </tr>
            <tr bgcolor="lightgray">
                <tr>
                <td><img className ="badges" src={Grass}></img></td>
                
                <td><img className ="badges" src={Water}></img></td>
                
                <td><img className ="badges" src={Fire}></img></td>
                
                <td><img className ="badges" src={Fighting}></img></td>
                
                <td><img className ="badges" src={Ghost}></img></td>
                
                <td><img className ="badges" src={Galar_Fairy}></img></td>

                <td><img className ="badges" src={Rock}></img></td>
                
                <td><img className ="badges" src={Ice}></img></td>

                <td><img className ="badges" src={Dark}></img></td>

                <td><img className ="badges" src={Dragon}></img></td>
                </tr>
            </tr>
        </table>
        </div>
        </div>
    )
}