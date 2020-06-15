const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express();

class computadorasN{
    constructor(id,Marca,Almacenamiento,Ram,Costo,Cantidad){
      this.id = id;
      this.Marca =Marca ;
      this.Almacenamiento = Almacenamiento;
      this.Ram = Ram;
      this.Costo = Costo;
      this.Cantidad = Cantidad;
    }
  }




const computadoras=[{
    "id": 0,
    "Marca": "Toshiba",
    "Almacenamiento":"1TB dds ",
    "RAM": "6 GB",
    "Costo": 12500,
    "Cantidad": 3,
  },
  {
    "id": 1,
    "Marca": "Dell",
    "Almacenamiento":"500 GB dds ",
    "RAM": "4 GB",
    "Costo": 8000,
    "Cantidad": 4,
  },
  { 
    "id": 2,
    "Marca": "Asus",
    "Almacenamiento":"2TB dds ",
    "RAM": "16 GB",
    "Costo": 20000,
    "Cantidad": 2,
  },
  {
    "id": 3,
    "Marca": "Lenovo",
    "Almacenamiento":"500 GB dds ",
    "RAM": "4 GB",
    "Costo": 7000,
    "Cantidad": 3,
  },
  {
    "id": 4,
    "Marca": "Razer",
    "Almacenamiento":"4TB dds ",
    "RAM": "18 GB",
    "Costo": 35000,
    "Cantidad": 4,
  }]

//const myInfo=new estructura()

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
  });
  
app.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000");
});

app.get("/",cors(),(req,res)=>{
    res.status(200).send({message:"Bienvenido ya estamos respondiendo"})
});

app.get("/usuarios/:id?",cors(),(req,res)=>{
    if(req.params.id){
       //let res= myInfo.buscar(req.params.dato);
       //if(res!=null)
       let encontrado=-1;
       let i=0;
       while(i<computadoras.length){
           if(computadoras[i].id==parseInt(req.params.id))
           encontrado=i;
           i++;
       }
       if(encontrado==-1)
            res.status(500).send({tipo:"error",mensaje:"No existe"});
       else
            res.status(200).send(computadoras[encontrado]);
    }
    else 
    if (!computadoras)
        res.status(500).send({tipo:"error",message:"No existen los datos"});
    else
        res.status(200).send({message:"Todos", datos:computadoras});
});




app.post("/usuarios",cors(),(req,res)=>{
    let longitud = computadoras.length;
   
    
            let computadora =new computadorasN(longitud,
                req.body.marca,
                req.body.almacenamiento,
                req.body.ram,
                req.body.costo,
                req.body.cantidad);
            computadoras.push(computadora);
        
        res.send();
    
            });

app.delete("/usuarios",cors(),(req,res)=>{
    if(!req.body.numero){
        res.status(500).send({tipo:"error",mensaje:"Faltan datos"});
    }
    else {
        let dato = parseInt(req.body.numero);
        let encontrado=-1;
        let=i=0;
        while(i<computadoras.length){
            if(computadoras[i].id==parseInt(req.body.numero))
            encontrado=i;
            i++;
        }
        if(encontrado==-1)
             res.status(500).send({tipo:"error",mensaje:"No existe"});
        else
            computadoras.splice(parseInt(req.body.numero),1)
             res.status(200).send('borrado correctamente ');
             
        }
});
app.put("/usuarios",cors(),(req,res)=>{
    let computadora =new computadorasN(req.body.id,
      req.body.marca_nueva,
      req.body.almacenamiento_nuevo,
      req.body.ram_nueva,
      req.body.costo_nuevo,
      req.body.cantidad_nueva);
   computadoras[i]=computadora;
  
  res.send();    
});



