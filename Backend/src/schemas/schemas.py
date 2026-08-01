from selectors import _BaseSelectorImpl
from calendar import TUESDAY
from pydantic import BaseModel,ConfigDict
from bson.objectid import ObjectId

from typing import Optional
from datetime import date


class user(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)
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
    model_config = ConfigDict(arbitrary_types_allowed=True)
    _id:ObjectId
    messages:list[messageDictInConversation]
    uids:list[ObjectId]

class messageDictInConversation(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)
    message_id:ObjectId
    time:date

class message(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True)
    _id:ObjectId
    content:str
    uid:ObjectId

class userSignup(BaseModel):
    email:str
    password:str
    full_name:str

class userSignin(BaseModel):
    email:str
    password:str