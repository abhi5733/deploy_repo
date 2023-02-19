const express = require("express")

const notesRouter = express.Router()

const {noteModel} = require("../model/notes.model")





// get all the notes of that user//


notesRouter.get("/" , async (req,res)=>{

    let id = req.body.userID
    
   try{

  
    let notes =  await noteModel.find({userID:id})
  
    if(notes.length===0){
        return res.status(404).send({"msg":"data not found"})
    }

      res.send(notes)

    }

   catch(err){
    res.send({"msg":"error","err":err.message})
   }


})

// get notes by id //



notesRouter.get("/:id" , async (req,res)=>{

    let id = req.params.id

    try{
 
     let notes = await noteModel.find({
        _id
        :id})
     res.send(notes)
 
 
    }catch(err){
     res.send({"msg":"error","err":err.message})
    }
 
 
 })




 // creating the notes //                                               

notesRouter.post("/create",async(req,res)=>{

    try{

        let notes = new noteModel(req.body)
        await notes.save()
        res.send({"msg":"notes created successfully"})

    }catch(err){
        res.send({"msg":"notes not created","err":err.message})
    }

    
})

   // updating the notes //   

notesRouter.patch("/update/:id", async (req,res)=>{

    let id = req.params.id
  const note =  await noteModel.findOne({_id:id})
//  let noteid = note[0].userID
console.log(req.body)
  if(!note){
    return res.status(404).send({"msg":`note not found with id${id}` })
  }
 try{
  await noteModel.findByIdAndUpdate({_id:id}, req.body)

  res.status(200).send({"msg":"note updated successfully"})

 }catch(err){
    res.status(500).send({"msg":"something went wrong" , "err":err.message})
 }

//  console.log(note)
})

// let userid = req.body.userID
 
   
//     try{
     
//         if(noteid===userid){
//          await noteModel.findByIdAndUpdate({_id:id},req.body)
//          res.send({"msg":"note updated successfully"})
//         }else{
//             res.send({"msg":"you are not authorized"})
//         }
//     }
      
    
//     catch(err){
       
//         res.send({"msg":"notes not created","err":err.message})
//     }
 


 
   // deleting the notes //

notesRouter.delete("/delete/:id",async (req,res)=>{

  let id = req.params.id
  const note =  await noteModel.find({_id:id})
 let noteid = note[0].userID
 let userid = req.body.userID
 
    try{

        if(noteid===userid){
            await noteModel.findByIdAndDelete({_id:id})
            res.send({"msg":"notes deleted successfully"})
        }else{
            res.send({"msg":"you are not authorized"})
        }

     

    }catch(err){
        res.send({"msg":"notes not deleted","err":err.message})
    }


})


module.exports = {notesRouter}