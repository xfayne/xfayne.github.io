import React from 'react'
import Gallery from 'react-grid-gallery'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker} from 'react-leaflet'
import AntPath from "react-leaflet-ant-path"
import Text,{mapHeader} from './MapText'

export const MapHeader = mapHeader
export const MapText = Text
const antPathOptions = { delay: 800, dashArray: [10,20], weight: 5, color: "#0000FF", pulseColor: "#FFFFFF" }
const antPathOptions2 = { delay: 800, dashArray: [10,20], weight: 5, color: "#9CF0FF", pulseColor: "#00A88F" }
const greenIcon = new Leaflet.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]})

const positions = [[-13.855329912, -76.323998704], [-14.7166638, -75.1333328],[-16.3926250962, -71.5354628581]
,[-15.5916643, -71.87416317],[-12.260057, -70.907156],[-13.2928, -72.0845],[-9.526115,-77.528778]]
const subPositions = [[-13.3356, -72.157],[-13.3299, -72.1971],[-13.2584, -72.2643],[-13.1631, -72.545]]
//const urls = ['https://picsor.000webhostapp.com/IMG_4684.jpg','https://picsor.000webhostapp.com/IMG_4614-2.jpg']
const urls =['https://i.ibb.co/7W6TJqH/img2.jpg','https://i.ibb.co/2tnxrvB/img1.jpg']

const imgs = urls.map(url =>{return({
        src: url,
        thumbnail: url,
        thumbnailWidth: window.innerHeight*0.4*16/9,
        thumbnailHeight: window.innerHeight*0.4
})});

export default function MapScreen() {
  return (
    <div>
    <Map center={[-13.2928, -72.0845]} zoom={10} dragging={false} zoomControl={false} style={{width:'100%',height:'60vh'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      {subPositions.map((pos,index)=><Marker position ={pos} key={index}/>)}
      {positions.map((pos,index)=><Marker position ={pos} key={index}/>)}
      <Marker position = {[-13.2928, -72.0845]} icon = {greenIcon}/>
      <Marker position = {[-13.2584, -72.2643]} icon = {greenIcon}/>
      <AntPath positions={positions} options={antPathOptions} /> 
      <AntPath positions={subPositions} options={antPathOptions2} /> 
  </Map>
  <Gallery images={imgs} enableImageSelection={false} rowHeight={window.innerHeight*0.4} />
</div>
  )

}