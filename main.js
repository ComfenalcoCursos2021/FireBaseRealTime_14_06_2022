addEventListener("DOMContentLoaded", ()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyAssbjbdJ4XU8CkV7jALp1fjB3LdpJ5wAU",
        authDomain: "primeravez-f7bdc.firebaseapp.com",
        databaseURL: "https://primeravez-f7bdc-default-rtdb.firebaseio.com",
        projectId: "primeravez-f7bdc",
        storageBucket: "primeravez-f7bdc.appspot.com",
        messagingSenderId: "1059242105431",
        appId: "1:1059242105431:web:e5887a3e4f41718b122112"
    };
    firebase.initializeApp(firebaseConfig);
    //Vigilar cambios
    // firebase.database().ref('lista').on("value", (e)=>{
    //     console.log(e.val());
    // })
    
    //Guardar y actualizar datos
    // let obj = {
    //     id: 777
    // };
    // firebase.database().ref('pagina').set(obj);

    //Eliminar paquetes
    // firebase.database().ref('pagina').remove();

    // let buscar = async(id)=>{
    //     let busqueda = await firebase.database().ref(`lista/${id}`).get();
    //     let json = await busqueda.val();
    //     console.log(json);
    // }
    // buscar(123)

    //Eliminar Datos
    // let Eliminar = async(id)=>{
    //     firebase.database().ref(`lista/${id}`).remove();
    // }
    // Eliminar(888)

    //Agregar en listas
    // let insertar = async(data)=>{
    //     let busqueda = await firebase.database().ref(`lista`).get();
    //     let json = await busqueda.val();
    //     firebase.database().ref(`lista/${json.length}`).update(data);
    // }
    // insertar({nombre: "dff"})

    //Agregar en listas sin duplicar
    let insertarSinDuplicar = async(data)=>{
        let busqueda = await firebase.database().ref(`lista`).get();
        let json = await busqueda.val();
        let personasMap = json.map(item=>{
            return [item.nombre,item]
        });
        var personasMapArr = new Map(personasMap);
        let unicos = [...personasMapArr.values()];
        firebase.database().ref(`lista`).remove();
        firebase.database().ref(`lista`).set(unicos);
    }
    insertarSinDuplicar({nombre: "dff"})
})