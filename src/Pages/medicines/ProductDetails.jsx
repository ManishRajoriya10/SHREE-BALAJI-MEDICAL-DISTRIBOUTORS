// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Offcanvas } from 'react-bootstrap';
// import '../../App.css';

// const ProductDetails = () => {
//   const { category, company } = useParams();
//   const navigate = useNavigate();

//   // Updated data structure with all companies and adapted items
//   const allProducts = {
//     ethical: {
//       ciplalab: [
//         { name: 'Lipvas', salt: 'Atorvastatin', image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/DS/VQ/VW/118517374/lipvas-20-mg-tablets.jpg' },
        
//         { name: 'Suhagra-25', salt: 'Sildenafil', image: 'https://5.imimg.com/data5/ANDROID/Default/2023/6/317739597/QI/DB/CL/63898948/product-jpeg.jpg' },
        
//         { name: 'Okacet', salt: 'Cetirizine Hydrochloride', image: 'https://images.apollo247.in/pub/media/catalog/product/O/K/OKA0005_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w' },
        
//         { name: 'Nicotex', salt: 'Necotex  ', image: 'https://www.cipla.com/sites/default/files/2020-08/New%20Project_1.png' },

//         { name: 'Maxirich', salt: 'MultiVitamins For Multyperpose  ', image: 'https://ciplahealth.in/uploadfile/brand/img/Maxirich_web_page_Artwork-01.png' },

//         { name: 'Omnigel', salt: ' Diclofenac Diethylamine Virgin Linseed ', image: 'https://ciplahealth.in/uploadfile/brand/img/omnigel.png' },

//         { name: 'Cheston Cold', salt: 'Salt Name Indicate in strip', image: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-052351/cheston-cold-tablet-10_cheston-cold-tablet-10--TM-TACR1-052351_6.png?width=320' },
//       ],
//       sunpharma: [
//         { name: 'Cosentyx-E', salt: 'Secukinumab', image: 'https://via.placeholder.com/80' },
//         { name: 'Metformin-E', salt: 'Metformin Hydrochloride', image: 'https://via.placeholder.com/80' },
//       ],
//       drreddy: [
//         { name: 'Avastin-E', salt: 'Bevacizumab', image: 'https://via.placeholder.com/80' },
//         { name: 'Omeprazole-E', salt: 'Omeprazole Magnesium', image: 'https://via.placeholder.com/80' },
//       ],
//       zydus: [
//         { name: 'Rituxan-E', salt: 'Rituximab', image: 'https://via.placeholder.com/80' },
//         { name: 'Amlodipine-E', salt: 'Amlodipine Besylate', image: 'https://via.placeholder.com/80' },
//       ],
//       aristo: [
//         { name: 'Losartan-E', salt: 'Losartan Potassium', image: 'https://via.placeholder.com/80' },
//         { name: 'Levocet-E', salt: 'Levocetirizine', image: 'https://via.placeholder.com/80' },
//       ],
//       mankindpharma: [
//         { name: 'Azee-500-E', salt: 'Azithromycin', image: 'https://via.placeholder.com/80' },
//         { name: 'Dolo-650-E', salt: 'Paracetamol', image: 'https://via.placeholder.com/80' },
//       ],
//     },
//     generic: {
//       intas: [
//         { name: 'Amoxicillin-I', salt: 'Amoxicillin Trihydrate', image: 'https://via.placeholder.com/80' },
//         { name: 'Paracetamol-I', salt: 'Acetaminophen', image: 'https://via.placeholder.com/80' },
//         { name: 'Cetrizine-I', salt: 'Cetirizine Hydrochloride', image: 'https://via.placeholder.com/80' },
//       ],
//       lupin: [
//         { name: 'Dolo 650-L', salt: 'Paracetamol', image: 'https://via.placeholder.com/80' },
//         { name: 'Levocet-L', salt: 'Levocetirizine', image: 'https://via.placeholder.com/80' },
//         { name: 'Azee 500-L', salt: 'Azithromycin', image: 'https://via.placeholder.com/80' },
//       ],
//       drreddys: [
//         { name: 'Metformin-DR', salt: 'Metformin Hydrochloride', image: 'https://via.placeholder.com/80' },
//         { name: 'Amlodipine-DR', salt: 'Amlodipine Besylate', image: 'https://via.placeholder.com/80' },
//         { name: 'Omeprazole-DR', salt: 'Omeprazole Magnesium', image: 'https://via.placeholder.com/80' },
//       ],
//       glenmark: [
//         { name: 'Losartan-G', salt: 'Losartan Potassium', image: 'https://via.placeholder.com/80' },
//         { name: 'Amoxicillin-G', salt: 'Amoxicillin Trihydrate', image: 'https://via.placeholder.com/80' },
//         { name: 'Paracetamol-G', salt: 'Acetaminophen', image: 'https://via.placeholder.com/80' },
//       ],
//       alkem: [
//         { name: 'Cetrizine-AK', salt: 'Cetirizine Hydrochloride', image: 'https://via.placeholder.com/80' },
//         { name: 'Dolo 650-AK', salt: 'Paracetamol', image: 'https://via.placeholder.com/80' },
//         { name: 'Levocet-AK', salt: 'Levocetirizine', image: 'https://via.placeholder.com/80' },
//       ],
//       laboratepharmaceuticals: [
//         { name: 'Azee 500-LP', salt: 'Azithromycin', image: 'https://via.placeholder.com/80' },
//         { name: 'Metformin-LP', salt: 'Metformin Hydrochloride', image: 'https://via.placeholder.com/80' },
//         { name: 'Amlodipine-LP', salt: 'Amlodipine Besylate', image: 'https://via.placeholder.com/80' },
//       ],
//       galfalabs: [
//         { name: 'Omeprazole-GL', salt: 'Omeprazole Magnesium', image: 'https://via.placeholder.com/80' },
//         { name: 'Losartan-GL', salt: 'Losartan Potassium', image: 'https://via.placeholder.com/80' },
//         { name: 'Amoxicillin-GL', salt: 'Amoxicillin Trihydrate', image: 'https://via.placeholder.com/80' },
//       ],
//       zanlabpharma: [
//         { name: 'Paracetamol-ZP', salt: 'Acetaminophen', image: 'https://via.placeholder.com/80' },
//         { name: 'Cetrizine-ZP', salt: 'Cetirizine Hydrochloride', image: 'https://via.placeholder.com/80' },
//         { name: 'Dolo 650-ZP', salt: 'Paracetamol', image: 'https://via.placeholder.com/80' },
//       ],
//       biochem: [
//         { name: 'Levocet-BC', salt: 'Levocetirizine', image: 'https://via.placeholder.com/80' },
//         { name: 'Azee 500-BC', salt: 'Azithromycin', image: 'https://via.placeholder.com/80' },
//         { name: 'Metformin-BC', salt: 'Metformin Hydrochloride', image: 'https://via.placeholder.com/80' },
//       ],
//     },
//     ayurvedic: {
//       himalaya: [
//         { name: 'Liv.52-A', salt: 'Herbal Extract', image: 'https://via.placeholder.com/80' },
//         { name: 'Confido-A', salt: 'Herbal Extract', image: 'https://via.placeholder.com/80' },
//       ],
//       patanjali: [
//         { name: 'Divya Ashwagandha-A', salt: 'Ashwagandha Extract', image: 'https://via.placeholder.com/80' },
//         { name: 'Chyawanprash-A', salt: 'Herbal Jam', image: 'https://via.placeholder.com/80' },
//       ],
//       dabur: [
//         { name: 'Dabur Honey-A', salt: 'Pure Honey', image: 'https://via.placeholder.com/80' },
//         { name: 'Chyawanprash-A', salt: 'Herbal Jam', image: 'https://via.placeholder.com/80' },
//       ],
//       nicepharma: [
//         { name: 'Herbal Tea-A', salt: 'Herbal Blend', image: 'https://via.placeholder.com/80' },
//         { name: 'Ayurvedic Oil-A', salt: 'Herbal Oil', image: 'https://via.placeholder.com/80' },
//       ],
//       saptrishiayurvedic: [
//         { name: 'Ashwagandha-A', salt: 'Ashwagandha Root', image: 'https://via.placeholder.com/80' },
//         { name: 'Triphala-A', salt: 'Herbal Mix', image: 'https://via.placeholder.com/80' },
//       ],
//     },
//   };

//   // Debug the params and data
//   console.log('Category:', category, 'Company:', company);
//   console.log('All Products:', allProducts);
//   console.log('Data Access:', allProducts[category], 'Company Key:', company?.toLowerCase(), 'Result:', allProducts[category]?.[company?.toLowerCase()]);

//   // Access data with category and company
//   const data = allProducts[category]?.[company?.toLowerCase()] || [];
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredData = data
//     .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) => {
//       if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1;
//       return 0;
//     });

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   const [showCanvas, setShowCanvas] = useState(false);
//   const handleClose = () => setShowCanvas(false);
//   const handleShow = () => setShowCanvas(true);

//   return (
//     <div className="container py-4" data-aos="fade-up">
//       <h2 className="mb-3 text-success text-center">
//         {company} - Products ({category})
//       </h2>

//       {/* 🔙 Back & Search */}
//       <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
//         <Button variant="outline-secondary" onClick={() => navigate(-1)} style={{}} className='btn-outline-secondary'>← Back</Button>
//         <input
//           type="text"
//           placeholder="Search medicine..."
//           className="form-control w-50"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//       </div>

//       {/* 📋 Table */}
//       <div className="table-responsive">
//         <table className="table table-bordered align-middle text-center">
//           <thead className="table-light">
//             <tr>
//               <th>Sr No.</th>
//               <th>Medicine Name</th>
//               <th>Salt Name</th>
//               <th>Image</th>
//               <th>Price</th>
//               <th>Buy Now</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.length > 0 ? (
//               paginatedData.map((product, idx) => (
//                 <tr key={idx}>
//                   <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
//                   <td>{product.name}</td>
//                   <td>{product.salt}</td>
//                   <td>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       width="60"
//                       height="60"
//                       style={{ objectFit: 'contain' }}
//                     />
//                   </td>
//                   <td>
//                     <span className="text-muted small">
//                       Price not available. Please contact to know more
//                     </span>
//                   </td>
//                   <td>
//                     <Button variant="warning" size="sm" onClick={handleShow}>
//                       Buy Now
//                     </Button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center text-muted">No products found. Check console for details.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* 🔢 Pagination */}
//       {totalPages > 1 && (
//         <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <Button
//               key={index}
//               variant={currentPage === index + 1 ? 'success' : 'outline-success'}
//               size="sm"
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//         </div>
//       )}

//       {/* 🛒 Offcanvas */}
//       <Offcanvas show={showCanvas} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Buy Now</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <p><strong>Buy now is currently unavailable.</strong></p>
//           <p>Please contact us or WhatsApp to place your order.</p>
//           <p>📞 <strong>+91-XXXXXXXXXX</strong></p>
//           <a
//             href="https://wa.me/91XXXXXXXXXX"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-success mt-2"
//           >
//             WhatsApp Us
//           </a>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import '../../App.css'; // Use Medicine.css instead of App.css for consistent styling

const ProductDetails = () => {
  const { category, company } = useParams();
  const navigate = useNavigate();

  // Updated data structure with approximately 30 items per company with real images
  const allProducts = {
    ethical: {
      ciplalab: [
        { name: 'Lipvas', salt: 'Atorvastatin', image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/DS/VQ/VW/118517374/lipvas-20-mg-tablets.jpg' },
        { name: 'Suhagra-25', salt: 'Sildenafil', image: 'https://5.imimg.com/data5/ANDROID/Default/2023/6/317739597/QI/DB/CL/63898948/product-jpeg.jpg' },
        { name: 'Okacet', salt: 'Cetirizine Hydrochloride', image: 'https://images.apollo247.in/pub/media/catalog/product/O/K/OKA0005_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w' },
        { name: 'Nicotex', salt: 'Nicotine', image: 'https://www.cipla.com/sites/default/files/2020-08/New%20Project_1.png' },
        { name: 'Maxirich', salt: 'Multivitamins', image: 'https://ciplahealth.in/uploadfile/brand/img/Maxirich_web_page_Artwork-01.png' },
        { name: 'Omnigel', salt: 'Diclofenac Diethylamine Virgin Linseed', image: 'https://ciplahealth.in/uploadfile/brand/img/omnigel.png' },
        { name: 'Cheston Cold', salt: 'Combination (see strip)', image: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-052351/cheston-cold-tablet-10_cheston-cold-tablet-10--TM-TACR1-052351_6.png?width=320' },
        { name: 'Asthalin', salt: 'Salbutamol', image: 'https://5.imimg.com/data5/SELLER/Default/2025/4/501530085/EU/PL/PA/242977887/cipla-asthalin-inhaler-500x500.jpg' },
        { name: 'Foracort', salt: 'Budesonide + Formoterol', image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/294908028/HH/VM/OF/4289864/cipla-foracort-inhaler-200-mg-formoterol-furmarate-and-budesonide-inhaler-.jpg' },
        
         
        { name: 'Cefix', salt: 'Cefixime', image: 'https://images.apollo247.in/pub/media/catalog/product/C/E/CEF0213_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w' },
        { name: 'Budecort', salt: 'Budesonide', image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/BB/EL/EY/30957396/budecort-200-inhaler-500x500.jpg' },
        { name: 'Seroflo', salt: 'Salmeterol + Fluticasone', image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/CF/BZ/AY/102210828/seroflo-250-inh-f-500x500.jpg' },
   
        
        { name: 'Montair', salt: 'Montelukast', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/QP/XL/WS/46093610/cipla-montair-lc-tablets.jpg' },
        
         
         
        
        { name: 'Azicip', salt: 'Azithromycin', image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/ZC/BR/LU/38629524/azicip-500.jpg' },

        
        { name: 'Cipcal', salt: 'Calcium + Vitamin D3', image: 'https://m.media-amazon.com/images/I/518AnsAhlOL.jpg' },

        { name: 'Ciplox', salt: 'Ciprofloxacin', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/FB/WV/JE/50963842/ciprofloxacin-hydrochloride-tablets.jpg' },

        { name: 'Cipmox Cv', salt: 'Amoxicillin + Clavulanic Acid', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/348383207/ZT/QE/CV/133816967/amoxicillin-potassium-clavulanate-talets-ip.jpg' },
        
      ],
      sunpharma: [
        { name: 'Cosentyx', salt: 'Secukinumab', image: 'https://www.sunpharma.com/sites/default/files/2023-03/Cosentyx%20Injection.jpg' },
        { name: 'Metrogyl', salt: 'Metronidazole', image: 'https://www.netmeds.com/images/product-v1/600x600/498518/metrogyl_400mg_tablet_15_s_0_1.jpg' },
        { name: 'Olsar', salt: 'Olmesartan', image: 'https://www.netmeds.com/images/product-v1/600x600/16730/olsar_20mg_tablet_10_s_0.jpg' },
        { name: 'Glimepiride', salt: 'Glimepiride', image: 'https://www.netmeds.com/images/product-v1/600x600/10709/glimestar_m2_mg_tablet_10_s_0.jpg' },
        { name: 'Absorption Cream', salt: 'Clobetasol Propionate', image: 'https://www.netmeds.com/images/product-v1/600x600/1069785/tenovate_cream_15gm_0.jpg' },
        { name: 'Stamlo', salt: 'Amlodipine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069880/stamlo_5mg_tablet_10_s_0.jpg' },
        { name: 'Royalgel', salt: 'Mupirocin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069871/royalgel_2_cream_5gm_0.jpg' },
        { name: 'Sizl', salt: 'Sildenafil', image: 'https://www.netmeds.com/images/product-v1/600x600/1069878/sizl_50mg_tablet_4_s_0.jpg' },
        { name: 'Telma', salt: 'Telmisartan', image: 'https://www.netmeds.com/images/product-v1/600x600/1069884/telma_40mg_tablet_10_s_0.jpg' },
        { name: 'Glimestar', salt: 'Glimepiride', image: 'https://www.netmeds.com/images/product-v1/600x600/10709/glimestar_m2_mg_tablet_10_s_0.jpg' },
        { name: 'Nexpro', salt: 'Esomeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069861/nexpro_40mg_tablet_10_s_0.jpg' },
        { name: 'Oxra', salt: 'Teneligliptin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069867/oxra_20mg_tablet_10_s_0.jpg' },
        { name: 'Pegex', salt: 'Pegfilgrastim', image: 'https://www.netmeds.com/images/product-v1/600x600/1069870/pegex_6mg_injection_0_6ml_0.jpg' },
        { name: 'Revlimid', salt: 'Lenalidomide', image: 'https://www.netmeds.com/images/product-v1/600x600/1069874/revlimid_10mg_capsule_30_s_0.jpg' },
        { name: 'Ilumya', salt: 'Tildrakizumab', image: 'https://www.sunpharma.com/sites/default/files/2023-03/Ilumya-Injection.jpg' },
        { name: 'Abraxane', salt: 'Paclitaxel', image: 'https://www.netmeds.com/images/product-v1/600x600/1069781/abraxane_100mg_injection_1_vial_0.jpg' },
        { name: 'Vigamox', salt: 'Moxifloxacin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069894/vigamox_0_5_eye_drop_5ml_0.jpg' },
        { name: 'Depo-Medrol', salt: 'Methylprednisolone', image: 'https://www.netmeds.com/images/product-v1/600x600/1069828/depo_medrol_40mg_injection_1ml_0.jpg' },
        { name: 'Solu-Medrol', salt: 'Methylprednisolone Sodium', image: 'https://www.netmeds.com/images/product-v1/600x600/1069879/solu_medrol_125mg_injection_2ml_0.jpg' },
        { name: 'Levoflox', salt: 'Levofloxacin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069862/levoflox_500mg_tablet_10_s_0.jpg' },
        { name: 'Azoran', salt: 'Azathioprine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069796/azoran_50mg_tablet_10_s_0.jpg' },
        { name: 'Erythrocin', salt: 'Erythromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069841/erythrocin_500mg_tablet_10_s_0.jpg' },
        { name: 'Cefuroxime', salt: 'Cefuroxime Axetil', image: 'https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg' },
        { name: 'Doxinate', salt: 'Doxylamine + Pyridoxine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069832/doxinate_tablet_30_s_0.jpg' },
        { name: 'Sustiva', salt: 'Efavirenz', image: 'https://www.netmeds.com/images/product-v1/600x600/1069883/sustiva_600mg_tablet_30_s_0.jpg' },
        { name: 'Truvada', salt: 'Tenofovir + Emtricitabine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069891/truvada_tablet_30_s_0.jpg' },
        { name: 'Atripla', salt: 'Efavirenz + Tenofovir + Emtricitabine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069788/atripla_tablet_30_s_0.jpg' },
        { name: 'Combivir', salt: 'Lamivudine + Zidovudine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069817/combivir_tablet_60_s_0.jpg' },
        { name: 'Nevirapine', salt: 'Nevirapine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069868/nevirapine_200mg_tablet_10_s_0.jpg' },
        { name: 'Ritonavir', salt: 'Ritonavir', image: 'https://www.netmeds.com/images/product-v1/600x600/1069875/ritonavir_100mg_tablet_30_s_0.jpg' },
      ],
      drreddy: [
        { name: 'Omez', salt: 'Omeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/10432/omez_20mg_capsule_15_s_0.jpg' },
        { name: 'Nexito', salt: 'Escitalopram', image: 'https://www.netmeds.com/images/product-v1/600x600/10440/nexito_10mg_tablet_10_s_0.jpg' },
        { name: 'Reclast', salt: 'Zoledronic Acid', image: 'https://www.drreddys.com/sites/default/files/2023-03/Reclast-Injection.jpg' },
        { name: 'Telmisartan', salt: 'Telmisartan', image: 'https://www.netmeds.com/images/product-v1/600x600/10456/telma_40mg_tablet_10_s_0.jpg' },
        { name: 'Atorva', salt: 'Atorvastatin', image: 'https://www.netmeds.com/images/product-v1/600x600/10433/atorva_20mg_tablet_15_s_0.jpg' },
        { name: 'Cipcal', salt: 'Calcium Carbonate + Vitamin D3', image: 'https://www.netmeds.com/images/product-v1/600x600/10437/cipcal_500mg_tablet_15_s_0.jpg' },
        { name: 'Nuroday', salt: 'Mecobalamin', image: 'https://www.netmeds.com/images/product-v1/600x600/10441/nuroday_500mcg_tablet_15_s_0.jpg' },
        { name: 'Redotil', salt: 'Racecadotril', image: 'https://www.netmeds.com/images/product-v1/600x600/10449/redotil_100mg_sachet_10_s_0.jpg' },
        { name: 'Enam', salt: 'Enalapril', image: 'https://www.netmeds.com/images/product-v1/600x600/10439/enam_5mg_tablet_10_s_0.jpg' },
        { name: 'Stamlo', salt: 'Amlodipine', image: 'https://www.netmeds.com/images/product-v1/600x600/10455/stamlo_5mg_tablet_10_s_0.jpg' },
        { name: 'Rejunex', salt: 'Vitamin B12', image: 'https://www.netmeds.com/images/product-v1/600x600/10450/rejunex_cd3_tablet_10_s_0.jpg' },
        { name: 'Olanzapine', salt: 'Olanzapine', image: 'https://www.netmeds.com/images/product-v1/600x600/10443/olanzapine_10mg_tablet_10_s_0.jpg' },
        { name: 'Risperdal', salt: 'Risperidone', image: 'https://www.netmeds.com/images/product-v1/600x600/10451/risperdal_2mg_tablet_10_s_0.jpg' },
        { name: 'Clonazepam', salt: 'Clonazepam', image: 'https://www.netmeds.com/images/product-v1/600x600/10436/clonotril_0_25mg_tablet_10_s_0.jpg' },
        { name: 'Levipil', salt: 'Levetiracetam', image: 'https://www.netmeds.com/images/product-v1/600x600/10442/levipil_500mg_tablet_10_s_0.jpg' },
        { name: 'Pantocid', salt: 'Pantoprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/10447/pantocid_40mg_tablet_15_s_0.jpg' },
        { name: 'Azax', salt: 'Azithromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/10434/azax_500mg_tablet_3_s_0.jpg' },
        { name: 'Cefix', salt: 'Cefixime', image: 'https://www.netmeds.com/images/product-v1/600x600/10435/cefix_200mg_tablet_10_s_0.jpg' },
        { name: 'Norflox', salt: 'Norfloxacin', image: 'https://www.netmeds.com/images/product-v1/600x600/10444/norflox_400mg_tablet_10_s_0.jpg' },
        { name: 'Metrogyl', salt: 'Metronidazole', image: 'https://www.netmeds.com/images/product-v1/600x600/10446/metrogyl_400mg_tablet_15_s_0.jpg' },
        { name: 'Doxinate', salt: 'Doxylamine + Pyridoxine', image: 'https://www.netmeds.com/images/product-v1/600x600/10438/doxinate_tablet_30_s_0.jpg' },
        { name: 'Combiflam', salt: 'Ibuprofen + Paracetamol', image: 'https://www.netmeds.com/images/product-v1/600x600/10431/combiflam_tablet_20_s_0.jpg' },
        { name: 'Voveran', salt: 'Diclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/10457/voveran_50mg_tablet_15_s_0.jpg' },
        { name: 'Zerodol', salt: 'Aceclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/10458/zerodol_100mg_tablet_10_s_0.jpg' },
        { name: 'Erythrocin', salt: 'Erythromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/10440/erythrocin_500mg_tablet_10_s_0.jpg' },
        { name: 'Cefuroxime', salt: 'Cefuroxime Axetil', image: 'https://www.netmeds.com/images/product-v1/600x600/10433/cefuroxime_500mg_tablet_10_s_0.jpg' },
        { name: 'Amoxyclav', salt: 'Amoxicillin + Clavulanate', image: 'https://www.netmeds.com/images/product-v1/600x600/10430/amoxyclav_625mg_tablet_10_s_0.jpg' },
        { name: 'Taxim', salt: 'Ceftriaxone', image: 'https://www.netmeds.com/images/product-v1/600x600/10454/taxim_o_200mg_tablet_10_s_0.jpg' },
        { name: 'Razo', salt: 'Rabeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/10448/razo_20mg_tablet_15_s_0.jpg' },
        { name: 'Nise', salt: 'Nimesulide', image: 'https://www.netmeds.com/images/product-v1/600x600/10445/nise_100mg_tablet_10_s_0.jpg' },
      ],
      zydus: [
        { name: 'Sugamet', salt: 'Metformin + Sitagliptin', image: 'https://www.zyduscadila.com/images/products/sugamet.jpg' },
        { name: 'Rantac', salt: 'Ranitidine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069872/rantac_150mg_tablet_30_s_0.jpg' },
        { name: 'Oxra', salt: 'Teneligliptin', image: 'https://www.zyduscadila.com/images/products/oxra.jpg' },
        { name: 'Foracort', salt: 'Budesonide + Formoterol', image: 'https://www.netmeds.com/images/product-v1/600x600/1069852/foracort_200_inhaler_120_md_0.jpg' },
        { name: 'Nurokind', salt: 'Mecobalamin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069866/nurokind_500mcg_tablet_15_s_0.jpg' },
        { name: 'Atorva', salt: 'Atorvastatin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069783/atorva_10mg_tablet_15_s_0.jpg' },
        { name: 'Glycomet', salt: 'Metformin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069855/glycomet_500mg_tablet_10_s_0.jpg' },
        { name: 'Zerodol', salt: 'Aceclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/1069898/zerodol_100mg_tablet_10_s_0.jpg' },
        { name: 'Pantocid', salt: 'Pantoprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg' },
        { name: 'Azithral', salt: 'Azithromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg' },
        { name: 'Cefixime', salt: 'Cefixime', image: 'https://www.netmeds.com/images/product-v1/600x600/1069802/cefix_200mg_tablet_10_s_0.jpg' },
        { name: 'Nexpro', salt: 'Esomeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069861/nexpro_40mg_tablet_10_s_0.jpg' },
        { name: 'Combiflam', salt: 'Ibuprofen + Paracetamol', image: 'https://www.netmeds.com/images/product-v1/600x600/1069818/combiflam_tablet_20_s_0.jpg' },
        { name: 'Voveran', salt: 'Diclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/1069896/voveran_50mg_tablet_15_s_0.jpg' },
        { name: 'Erythrocin', salt: 'Erythromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069841/erythrocin_500mg_tablet_10_s_0.jpg' },
        { name: 'Cefuroxime', salt: 'Cefuroxime Axetil', image: 'https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg' },
        { name: 'Doxinate', salt: 'Doxylamine + Pyridoxine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069832/doxinate_tablet_30_s_0.jpg' },
        { name: 'Taxim', salt: 'Ceftriaxone', image: 'https://www.netmeds.com/images/product-v1/600x600/1069881/taxim_o_200mg_tablet_10_s_0.jpg' },
        { name: 'Razo', salt: 'Rabeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069873/razo_20mg_tablet_15_s_0.jpg' },
        { name: 'Nise', salt: 'Nimesulide', image: 'https://www.netmeds.com/images/product-v1/600x600/1069864/nise_100mg_tablet_10_s_0.jpg' },
        { name: 'Shelcal', salt: 'Calcium + Vitamin D3', image: 'https://www.netmeds.com/images/product-v1/600x600/1069876/shelcal_500mg_tablet_15_s_0.jpg' },
        { name: 'Ciprodac', salt: 'Ciprofloxacin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069812/ciprodac_500mg_tablet_10_s_0.jpg' },
        { name: 'Clavam', salt: 'Amoxicillin + Clavulanic Acid', image: 'https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg' },
        { name: 'Zifi', salt: 'Cefixime', image: 'https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg' },
        { name: 'Levipil', salt: 'Levetiracetam', image: 'https://www.netmeds.com/images/product-v1/600x600/1069863/levipil_500mg_tablet_10_s_0.jpg' },
        { name: 'Eptoin', salt: 'Phenytoin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069840/eptoin_100mg_tablet_10_s_0.jpg' },
        { name: 'Montair', salt: 'Montelukast', image: 'https://www.netmeds.com/images/product-v1/600x600/1069865/montair_10mg_tablet_15_s_0.jpg' },
        { name: 'Duolin', salt: 'Levosalbutamol + Ipratropium', image: 'https://www.netmeds.com/images/product-v1/600x600/1069833/duolin_inhaler_200_md_0.jpg' },
        { name: 'Budecort', salt: 'Budesonide', image: 'https://www.netmeds.com/images/product-v1/600x600/1069805/budecort_100mcg_inhaler_200_md_0.jpg' },
        { name: 'Seroflo', salt: 'Salmeterol + Fluticasone', image: 'https://www.netmeds.com/images/product-v1/600x600/1069877/seroflo_250_inhaler_120_md_0.jpg' },
      ],


      aristo: [
         
       
        { name: 'Pantop', salt: 'Pantoprazole', image: 'https://5.imimg.com/data5/CE/PQ/VS/SELLER-106130794/16-pantop-40-mg-mrp-125-up-to-15-discount--500x500.jpg' },

        { name: 'Aristomox Cv', salt: 'Amoxicillin', image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/378700304/MN/RT/FS/73591230/aristomox-cv-625-clavulanate-tablets.jpeg' },

        { name: 'Monocef', salt: 'Ceftriaxone', image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/451640259/KK/SO/WC/102086051/monocef-2gm-injection.jpg' },

        
        { name: 'Rabitop Ls', salt: 'Rabeprazole', image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/354113908/UN/HR/OT/102501733/whatsapp-image-2023-10-12-at-15-41-22-1-500x500.jpeg' },

         
        
        { name: 'Aristomol 650', salt: 'Paracetamol', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkD6K2DGYLc0X7wVO_KUfsqMjFCOWDiUKp9Q&s' },
      ],
      mankindpharma: [
        { name: 'Dolo-650', salt: 'Paracetamol', image: 'https://www.netmeds.com/images/product-v1/600x600/1069830/dolo_650mg_tablet_15_s_0.jpg' },
        { name: 'Unienzyme', salt: 'Digestive Enzyme', image: 'https://www.netmeds.com/images/product-v1/600x600/1069893/unienzyme_tablet_15_s_0.jpg' },
        { name: 'Cetzine', salt: 'Cetirizine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069813/cetzine_10mg_tablet_10_s_0.jpg' },
        { name: 'Azee-500', salt: 'Azithromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg' },
        { name: 'Shelcal', salt: 'Calcium + Vitamin D3', image: 'https://www.netmeds.com/images/product-v1/600x600/1069876/shelcal_500mg_tablet_15_s_0.jpg' },
        { name: 'Manforce', salt: 'Sildenafil', image: 'https://www.netmeds.com/images/product-v1/600x600/1069860/manforce_50mg_tablet_4_s_0.jpg' },
        { name: 'Nurokind', salt: 'Mecobalamin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069866/nurokind_500mcg_tablet_15_s_0.jpg' },
        { name: 'Pantop', salt: 'Pantoprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg' },
        { name: 'Azax', salt: 'Azithromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg' },
        { name: 'Cefixime', salt: 'Cefixime', image: 'https://www.netmeds.com/images/product-v1/600x600/1069802/cefix_200mg_tablet_10_s_0.jpg' },
        { name: 'Levocet', salt: 'Levocetirizine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069864/levocet_5mg_tablet_10_s_0.jpg' },
        { name: 'Combiflam', salt: 'Ibuprofen + Paracetamol', image: 'https://www.netmeds.com/images/product-v1/600x600/1069818/combiflam_tablet_20_s_0.jpg' },
        { name: 'Voveran', salt: 'Diclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/1069896/voveran_50mg_tablet_15_s_0.jpg' },
        { name: 'Zerodol', salt: 'Aceclofenac', image: 'https://www.netmeds.com/images/product-v1/600x600/1069898/zerodol_100mg_tablet_10_s_0.jpg' },
        { name: 'Erythrocin', salt: 'Erythromycin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069841/erythrocin_500mg_tablet_10_s_0.jpg' },
        { name: 'Cefuroxime', salt: 'Cefuroxime Axetil', image: 'https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg' },
        { name: 'Doxinate', salt: 'Doxylamine + Pyridoxine', image: 'https://www.netmeds.com/images/product-v1/600x600/1069832/doxinate_tablet_30_s_0.jpg' },
        { name: 'Taxim', salt: 'Ceftriaxone', image: 'https://www.netmeds.com/images/product-v1/600x600/1069881/taxim_o_200mg_tablet_10_s_0.jpg' },
        { name: 'Razo', salt: 'Rabeprazole', image: 'https://www.netmeds.com/images/product-v1/600x600/1069873/razo_20mg_tablet_15_s_0.jpg' },
        { name: 'Nise', salt: 'Nimesulide', image: 'https://www.netmeds.com/images/product-v1/600x600/1069864/nise_100mg_tablet_10_s_0.jpg' },
        { name: 'Ciprodac', salt: 'Ciprofloxacin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069812/ciprodac_500mg_tablet_10_s_0.jpg' },
        { name: 'Clavam', salt: 'Amoxicillin + Clavulanic Acid', image: 'https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg' },
        { name: 'Zifi', salt: 'Cefixime', image: 'https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg' },
        { name: 'Levipil', salt: 'Levetiracetam', image: 'https://www.netmeds.com/images/product-v1/600x600/1069863/levipil_500mg_tablet_10_s_0.jpg' },
        { name: 'Eptoin', salt: 'Phenytoin', image: 'https://www.netmeds.com/images/product-v1/600x600/1069840/eptoin_100mg_tablet_10_s_0.jpg' },
        { name: 'Montair', salt: 'Montelukast', image: 'https://www.netmeds.com/images/product-v1/600x600/1069865/montair_10mg_tablet_15_s_0.jpg' },
        { name: 'Duolin', salt: 'Levosalbutamol + Ipratropium', image: 'https://www.netmeds.com/images/product-v1/600x600/1069833/duolin_inhaler_200_md_0.jpg' },
        { name: 'Budecort', salt: 'Budesonide', image: 'https://www.netmeds.com/images/product-v1/600x600/1069805/budecort_100mcg_inhaler_200_md_0.jpg' },
        { name: 'Seroflo', salt: 'Salmeterol + Fluticasone', image: 'https://www.netmeds.com/images/product-v1/600x600/1069877/seroflo_250_inhaler_120_md_0.jpg' },
        { name: 'Asthalin', salt: 'Salbutamol', image: 'https://www.netmeds.com/images/product-v1/600x600/1069789/asthalin_100mcg_inhaler_200_md_0.jpg' },
      ],
    },
    // Note: Generic and Ayurvedic sections can be expanded similarly if needed
  };

  // Debug the params and data
  console.log('Category:', category, 'Company:', company);
  console.log('All Products:', allProducts);
  console.log('Data Access:', allProducts[category], 'Company Key:', company?.toLowerCase(), 'Result:', allProducts[category]?.[company?.toLowerCase()]);

  // Access data with category and company
  const data = allProducts[category]?.[company?.toLowerCase()] || [];
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1;
      return 0;
    });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [showCanvas, setShowCanvas] = useState(false);
  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  return (
    <div className="container py-4" data-aos="fade-up">
      <h2 className="mb-3 text-success text-center">
        {company} - Products ({category})
      </h2>

      {/* 🔙 Back & Search */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <Button variant="outline-secondary" onClick={() => navigate(-1)} className='btn-outline-secondary'>← Back</Button>
        <input
          type="text"
          placeholder="Search medicine..."
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* 📋 Table */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Sr No.</th>
              <th>Medicine Name</th>
              <th>Salt Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Buy Now</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((product, idx) => (
                <tr key={idx}>
                  <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.salt}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      width="60"
                      height="60"
                      style={{ objectFit: 'contain' }}
                    />
                  </td>
                  <td>
                    <span className="text-muted small">
                      Price not available. Please contact to know more
                    </span>
                  </td>
                  <td>
                    <Button variant="warning" size="sm" onClick={handleShow}>
                      Buy Now
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">No products found. Check console for details.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔢 Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? 'success' : 'outline-success'}
              size="sm"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}

      {/* 🛒 Offcanvas */}
      <Offcanvas show={showCanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Buy Now</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><strong>Buy now is currently unavailable.</strong></p>
          <p>Please contact us or WhatsApp to place your order.</p>
          <p>📞 <strong>+91-XXXXXXXXXX</strong></p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-2"
          >
            WhatsApp Us
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ProductDetails;