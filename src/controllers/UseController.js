import express from "express";
import { Kitten } from "../models/UseModel.js"
import bcrypt from "bcrypt";

const app = express()
app.use(express.json())
  export const getAllData= async (req, res) => {
    try {
        
        const data=await Kitten.find()
      res.send(data)
    } catch (error) {
       res.send(error) 
    }
}

  export const getData =async (req, res) => {
    const {id}=req.params
    const data=await Kitten.findById(id)
  res.send(data)
}

export const deleteData=async (req, res) => {
    const {id}=req.params
    const data=await Kitten.findByIdAndDelete(id)
  res.send(data)
}

export const putData=async (req, res) => {
    const obj=req.body
    const {id}=req.params
    const data=await Kitten.findByIdAndUpdate(id,obj)
  res.send(data)
}

export const signIn=async (req, res) => {
    const {email,password}=req.body
    const hashPassword=await bcrypt.hash(password,10)
    const data=new Kitten({email:email,password:hashPassword})
    await data.save()
  res.send(data)
}


export const logIn=async (req, res) => {
    const {email,password}=req.body
    const data=await Kitten.findOne({email:email})
    if (!data) {
       return res.status(404).send("user not found")
    }
    const isPassword=await bcrypt.compare(password,data.password)
    if (!isPassword) {
        return res.status(400).send("wrong password")
    }
   
  res.send("xos geldiniz :)")
}