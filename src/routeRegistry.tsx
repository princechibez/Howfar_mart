import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import routes here
const Homepage = React.lazy(() => import("./pages/home/home"))

const RouteRegister = () => {
    const ComponentSigner = (CMP: React.FC) => {
        return (
            <React.Suspense fallback={<div />}>
                <CMP />
            </React.Suspense>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: ComponentSigner(Homepage)
        }
    ]);


    return <RouterProvider router={router} />;
};

export default RouteRegister;
