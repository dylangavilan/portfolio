import React from "react";

export default function Cards({ proyectos }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-xl mb-10 w-80 m-2 md:m-4 p-4 text-left space-y-4">
      <h3 className="text-4xl font-azeret text-center text-purple-600">
        {proyectos.nombre}
      </h3>
      <div className="inline justify-center items-center">
        <div className="flex justify-center">
          <img
            src={proyectos.imagen}
            alt="proyecto"
            className="h-66 w-96"
          ></img>
        </div>
        <div className="text-center">
          <h4>{proyectos.descripcion}</h4>
          <div className="text-gray-800 text-base font-semibold">
            {proyectos.tecnologias?.map((c, i) => {
              if (i === 0) {
                return <span>{c}</span>;
              }
              return <span>{" - " + c}</span>;
            })}
          </div>
          <div className="py-3">
            <button className="border-gray-700 border-2 rounded-sm px-2 text-purple-600 font-maven hover:bg-purple-600 hover:text-white">
              <a href={proyectos.repositorio} target="_blank" rel="noreferrer">
                Code
              </a>
            </button>
            {proyectos.deploy ? (
              <button className="border-gray-700 border-2 mx-1 rounded-sm px-2 text-purple-600 font-maven hover:bg-purple-600 hover:text-white">
                <a href={proyectos.deploy} target="_blank" rel="noreferrer">
                  Deploy
                </a>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
