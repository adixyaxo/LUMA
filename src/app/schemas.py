from pydantic import BaseModel
from bson import ObjectId
from typing import Optional
from datetime import date

class userSignup(BaseModel):
    _id:ObjectId
    email:str
    password:str
    first_name:str
    last_name:str
    phone_no:int
    username:str
    hashed_password:str
    date_created:date
    conversations:list[ObjectId]
    block_list:list[ObjectId]

class conversation(BaseModel):
    _id:ObjectId
    messages:list[dict[str:ObjectId,str:date]]
    uids:list[ObjectId]

class message(BaseModel):
    _id:ObjectId
    content:str
    uid:ObjectId
