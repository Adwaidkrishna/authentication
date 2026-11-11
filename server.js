import express from "express"
import node from "node"
import { createServer } from "node:http"

const server=createServer((req , res)=>{
    res.send("server is running")
})

server.listen(5000)

