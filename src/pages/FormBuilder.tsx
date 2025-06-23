
import React from "react";
import Layout from "@/components/Layout";
import PremiumGuard from "@/components/PremiumGuard";
import SEOHead from "@/components/SEOHead";

const FormBuilder = () => {
  return (
    <>
      <SEOHead 
        title="Form Builder - WhatsX"
        description="Build custom WhatsApp forms with our drag-and-drop form builder"
        keywords="form builder, WhatsApp forms, drag and drop"
      />
      <PremiumGuard 
        title="Form Builder"
        description="Create beautiful WhatsApp forms with our drag-and-drop builder."
        featureName="the form builder"
      >
        <Layout>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  WhatsApp Form Builder
                </h1>
                <p className="text-xl text-gray-600">
                  Create beautiful forms that connect directly to WhatsApp
                </p>
              </div>
              
              {/* Form Builder Interface would go here */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Form Builder Interface</h2>
                <p className="text-gray-600">
                  Premium form builder functionality is now accessible!
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </PremiumGuard>
    </>
  );
};

export default FormBuilder;
