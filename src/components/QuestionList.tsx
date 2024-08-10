"use client";
import { Button } from "@/components/ui/button";
import { FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface QuestionListProps{
  questions: Array<{id:number,text:string}>,
  handleAddQuestion: ()=>void
  handleDeleteQuestion: (id:number)=>void
  handleQuestionUpdate: (id:number,value:string) =>void
}

const QuestionList = (props: QuestionListProps) => {
  const { handleAddQuestion,handleDeleteQuestion,questions,handleQuestionUpdate} = props
  
  
  
  return (
    <div className="flex flex-col gap-4 ">
      <Label>Questions</Label>
      {questions?.map((q) => {
        return (
          <div key={q.id} className="flex items-center gap-2">
          <Input
            value={q.text}
            onChange={(e) => handleQuestionUpdate(q.id, e.target.value)}
          />
          <Button type="button" onClick={()=>handleDeleteQuestion(q.id)}>Delete</Button>
          </div>  
        );
      })}
        
      <div>
        <Button
          type="button"
          variant={"outline"}
          disabled={questions?.length === 5}
          onClick={handleAddQuestion}
          className="rounded px-4   "
        >
          Add one(up to 5)
        </Button>
      </div>
    </div>
  );
};

export default QuestionList;
