import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class CustomImage extends Component {
     render() {
          return (
               <div>
               <Image src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22794%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20794%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_168bc4c7ee4%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_168bc4c7ee4%22%3E%3Crect%20width%3D%22794%22%20height%3D%22250%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22294.6953125%22%20y%3D%22143.45%22%3E794x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" fluid />
               </div>
          )
     }
}

export default CustomImage;