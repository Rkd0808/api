const Product = require ("../models/product")


const getAllProducts = async(req, res) =>{
    const {company, name, feature, sort, select } = req.query;
    const queryObject ={};

    if(company){
        queryObject.company = company;
    }

    
    if(feature){
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name ={$regex:name, $options: "i" }
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    } 

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1)*limit;



    const Products = await apiData.skip(skip).limit(limit);   
    res.status(200).json({Products, nbHits: Products.length })
};


const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({msg:"getAllProductsTesting" })
};

module.exports ={getAllProducts,getAllProductsTesting};