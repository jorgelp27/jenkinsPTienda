// Generated by https://quicktype.io

import { ICliente } from "../auth";
import { ICategoria } from "../categorias";

export interface IProducto {
    id:             string;
    modelo:         string;
    precio:         number;
    fabricante:     string;
    imagen:         string;
    descripcion:    string;
    idCliente:      string;
    idCategoria:      string;
    idProveedor:      string;
    cliente: ICliente
    categoria: ICategoria
    
}

export interface IAuth {
    id:            string;
    email:         string;
    password:      string;
    facebook:      string;
    github:        string;
    idCliente:     string;
    cliente: ICliente

}

export interface ICesta {
    id:          string;
    cantidad:    number;
    fecha:       string;
    idProducto:  string;
    idUser:      string;
    producto: IProducto
    user: IAuth
    
}

// export interface ICesta: Cesta[];