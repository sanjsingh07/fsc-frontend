import * as React from  "react";
import './createProduct.css'

export class CreateProductt extends React.Component<{}, IState> {

    constructor(props:{}){
        super(props);

        this.state = {
            barcode: "",
            batchQuantity:"",
            category:"",
            componentProductIds:"",
            expirationDate:"",
            id:"",
            locationData:"",
            misc:"",
            name:"",
            placeOfOrigin:"",
            productionDate:"",
            unitPrice:"",
            unitQuantity:"",
            unitQuantityType:"",
            variety:"",
            componentProducts:"",

            tasks:[]
        }
    }

    handleSubmit(e:any){
        e.preventDefault();

        this.setState({
            barcode: "",
            tasks:[
                ...this.state.tasks,
                this.state.barcode
            ]
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className="sample">
               <form onSubmit={(e)=> this.handleSubmit(e)}>

                <div className='div1'>


                <label className="label-balance">barcode</label>
                <input type="text" 
                value={this.state.barcode}
                onChange={(e) => this.setState({barcode: e.target.value})}/>


                <label className="label-balance">batchQuantity</label>
                <input type="text" 
                value={this.state.batchQuantity}
                onChange={(e) => this.setState({batchQuantity: e.target.value})}/>

                <br/>

                <label className="label-balance">category</label>
                <input type="text" 
                value={this.state.category}
                onChange={(e) => this.setState({category: e.target.value})}/>


                <label className="label-balance">componentProductIds</label>
                <input type="text" 
                value={this.state.componentProductIds}
                onChange={(e) => this.setState({componentProductIds: e.target.value})}/>
                

                <br/>

                <label className="label-balance">expirationDate</label>
                <input type="text" 
                value={this.state.expirationDate}
                onChange={(e) => this.setState({expirationDate: e.target.value})}/>


                <label className="label-balance">id</label>
                <input type="text" 
                value={this.state.id}
                onChange={(e) => this.setState({id: e.target.value})}/>

                <br/>

                <label className="label-balance">locationData</label>
                <input type="text" 
                value={this.state.locationData}
                onChange={(e) => this.setState({locationData: e.target.value})}/>


                <label className="label-balance">misc</label>
                <input type="text" 
                value={this.state.misc}
                onChange={(e) => this.setState({misc: e.target.value})}/>

                <br/>

                <label className="label-balance">name</label>
                <input type="text" 
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}/>


                <label className="label-balance">placeOfOrigin</label>
                <input type="text" 
                value={this.state.placeOfOrigin}
                onChange={(e) => this.setState({placeOfOrigin: e.target.value})}/>

                <br/>

                <label className="label-balance">productionDate</label>
                <input type="text" 
                value={this.state.productionDate}
                onChange={(e) => this.setState({productionDate: e.target.value})}/>


                <label className="label-balance">unitPrice</label>
                <input type="text" 
                value={this.state.unitPrice}
                onChange={(e) => this.setState({unitPrice: e.target.value})}/>

                <br/>

                <label className="label-balance">unitQuantity</label>
                <input type="text" 
                value={this.state.unitQuantity}
                onChange={(e) => this.setState({unitQuantity: e.target.value})}/>


                <label className="label-balance">unitQuantityType</label>
                <input type="text" 
                value={this.state.unitQuantityType}
                onChange={(e) => this.setState({unitQuantityType: e.target.value})}/>

                <br/>

                <label className="label-balance">variety</label>
                <input type="text" 
                value={this.state.variety}
                onChange={(e) => this.setState({variety: e.target.value})}/>


                <label className="label-balance">componentProducts</label>
                <input type="text" 
                value={this.state.componentProducts}
                onChange={(e) => this.setState({componentProducts: e.target.value})}/>

                <br/>












                <button className='button-style'  type="submit">submit</button>
                </div>
               </form>
            </div>
        )
    }
}

interface IState {
    barcode: string;
    batchQuantity:string;
    category:string;
    componentProductIds:string;
    expirationDate:string;
    id:string;
    locationData:string;
    misc:string;
    name:string;
    placeOfOrigin:string;
    productionDate:string;
    unitPrice:string;
    unitQuantity:string;
    unitQuantityType:string;
    variety:string;
    componentProducts:string;






    tasks: Array<string>;
}

export default CreateProductt