"use client";

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";
import TableView from "../TableView";
import Timeline from "../TimelineView";
import ModalNewTask from "@/components/ModalNewTask";


// type Props = {
//     params: { id: string };
//   };

interface Params {
    id: string;
  }
  
interface Props {
    params: Promise<Params>;
}

const Project = ({ params }: Props) => {
    const unwrappedParams = React.use<Params>(params);
    const id = unwrappedParams.id;
    // const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
    <div>
        <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
       {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
       {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
    )
}

export default Project;