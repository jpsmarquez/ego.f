export default function NewInversion(props) {


    const [campos,setC] = useState(['']);

    const [index, setIndex] = useState(0);
    
    const llenarcampos=(rstring)=>{
      console.log(rstring)
      let c = [...campos]
      c[0]=rstring
      setC(c)

    }
    
    const [formularios,setFormularios] = useState([<Formasdecampo llenarcampos={llenarcampos} value={campos[0]} />]);

    const submit= ()=>{
      firebase.database().ref('inversion').push({
        titulo:titulo,
        tipo:tipo,
        descrip:desc,
        //campos:setC   
         
        
      })
     };

    const addform= ()=>{
        let f = [...formularios];

        f.push(<Formasdecampo setC={setC} campos={campos} llenarcampos={llenarcampos} value={campos[index]}/>);
        
        setFormularios(f)
    };

    return (
        

          {
            formularios.map((item,index)=>{

                return item;
            })
          }


    )
}
//arreglar nav bar
//styles components