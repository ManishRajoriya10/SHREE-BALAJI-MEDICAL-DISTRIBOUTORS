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

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";
import "../../App.css";

import lupipra from "../../assets/Producs _list/Lupin Pharmacuticals/Lupipara 650 mg.jpeg";
import lupipara500 from "../../assets/Producs _list/Lupin Pharmacuticals/LUPIPARA500TABS.jpg";
import Lupicef from "../../assets/Producs _list/Lupin Pharmacuticals/lupicef 0.webp";
import Lupicera from "../../assets/Producs _list/Lupin Pharmacuticals/lupicera.avif";
import Lupipara from "../../assets/Producs _list/Lupin Pharmacuticals/Lupipara Inj 2 ml.jpeg";
import Lupisulide from "../../assets/Producs _list/Lupin Pharmacuticals/lupisulide-p-silver-20x10-250x250.webp";
import Azilup from "../../assets/Producs _list/Lupin Pharmacuticals/azilup500.avif";
import Azilup250 from "../../assets/Producs _list/Lupin Pharmacuticals/Azilup 250.webp";
import OneClav from "../../assets/Producs _list/Lupin Pharmacuticals/one clav.jpeg";
import OneClav625 from "../../assets/Producs _list/Lupin Pharmacuticals/one clav 625.png";
import evoxil from '../../assets/Producs _list/Lefford/Evoxil_CV_625_10X1X10.png';
import relicastfxa from '../../assets/Producs _list/Lefford/relicast fxa.avif';
import Reclastlc from '../../assets/Producs _list/Lefford/relicast lc.avif';
import RelikastFxa from '../../assets/Producs _list/Lefford/relikast fx.png';
import Itromed200 from '../../assets/Producs _list/Lefford/itromed200.avif';
import Itromed100 from '../../assets/Producs _list/Lefford/itromed100.avif';
import ItromedShop from '../../assets/Producs _list/Lefford/iteromed shop.png';
import Lupiford30 from '../../assets/Producs _list/Lefford/Luliford_30g.png';
import Lupiford10 from '../../assets/Producs _list/Lefford/luliconazole-cream 10gm.webp';
import Lupifordlotion30 from '../../assets/Producs _list/Lefford/luliford lotion.webp';


const ProductDetails = () => {
  const { category, company } = useParams();
  const navigate = useNavigate();

  // Updated data structure with approximately 30 items per company with real images
  const allProducts = {
    ethical: {
      ciplalab: [
        {
          name: "Lipvas",
          salt: "Atorvastatin",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2021/2/DS/VQ/VW/118517374/lipvas-20-mg-tablets.jpg",
        },
        {
          name: "Suhagra-25",
          salt: "Sildenafil",
          image:
            "https://5.imimg.com/data5/ANDROID/Default/2023/6/317739597/QI/DB/CL/63898948/product-jpeg.jpg",
        },
        {
          name: "Okacet",
          salt: "Cetirizine Hydrochloride",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/O/K/OKA0005_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        },
        {
          name: "Nicotex",
          salt: "Nicotine",
          image:
            "https://www.cipla.com/sites/default/files/2020-08/New%20Project_1.png",
        },
        {
          name: "Maxirich",
          salt: "Multivitamins",
          image:
            "https://ciplahealth.in/uploadfile/brand/img/Maxirich_web_page_Artwork-01.png",
        },
        {
          name: "Omnigel",
          salt: "Diclofenac Diethylamine Virgin Linseed",
          image: "https://ciplahealth.in/uploadfile/brand/img/omnigel.png",
        },
        {
          name: "Cheston Cold",
          salt: "Combination (see strip)",
          image:
            "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-052351/cheston-cold-tablet-10_cheston-cold-tablet-10--TM-TACR1-052351_6.png?width=320",
        },
        {
          name: "Asthalin",
          salt: "Salbutamol",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2025/4/501530085/EU/PL/PA/242977887/cipla-asthalin-inhaler-500x500.jpg",
        },
        {
          name: "Foracort",
          salt: "Budesonide + Formoterol",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/3/294908028/HH/VM/OF/4289864/cipla-foracort-inhaler-200-mg-formoterol-furmarate-and-budesonide-inhaler-.jpg",
        },

        {
          name: "Cefix",
          salt: "Cefixime",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/C/E/CEF0213_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        },
        {
          name: "Budecort",
          salt: "Budesonide",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2021/6/BB/EL/EY/30957396/budecort-200-inhaler-500x500.jpg",
        },
        {
          name: "Seroflo",
          salt: "Salmeterol + Fluticasone",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/10/CF/BZ/AY/102210828/seroflo-250-inh-f-500x500.jpg",
        },

        {
          name: "Montair",
          salt: "Montelukast",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/9/QP/XL/WS/46093610/cipla-montair-lc-tablets.jpg",
        },

        {
          name: "Azicip",
          salt: "Azithromycin",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/3/ZC/BR/LU/38629524/azicip-500.jpg",
        },

        {
          name: "Cipcal",
          salt: "Calcium + Vitamin D3",
          image: "https://m.media-amazon.com/images/I/518AnsAhlOL.jpg",
        },

        {
          name: "Ciplox",
          salt: "Ciprofloxacin",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/1/FB/WV/JE/50963842/ciprofloxacin-hydrochloride-tablets.jpg",
        },

        {
          name: "Cipmox Cv",
          salt: "Amoxicillin + Clavulanic Acid",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/9/348383207/ZT/QE/CV/133816967/amoxicillin-potassium-clavulanate-talets-ip.jpg",
        },
      ],
      zydus: [
        {
          name: "R-loc 150",
          salt: "Ranitidine",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/8/338103542/YC/XW/EQ/91766502/zydus-150mg-ranitidine-tablets-ip.jpeg",
        },

        {
          name: "Dexona",
          salt: "Ranitidine",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/9/451048008/FW/VC/ET/227801705/zydus-dexona-0-5-mg-tablet.jpg",
        },
      ],

      aristo: [
        {
          name: "Pantop",
          salt: "Pantoprazole",
          image:
            "https://5.imimg.com/data5/CE/PQ/VS/SELLER-106130794/16-pantop-40-mg-mrp-125-up-to-15-discount--500x500.jpg",
        },

        {
          name: "Aristomox Cv",
          salt: "Amoxicillin",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/1/378700304/MN/RT/FS/73591230/aristomox-cv-625-clavulanate-tablets.jpeg",
        },

        {
          name: "Monocef",
          salt: "Ceftriaxone",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/9/451640259/KK/SO/WC/102086051/monocef-2gm-injection.jpg",
        },

        {
          name: "Rabitop Ls",
          salt: "Rabeprazole",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/10/354113908/UN/HR/OT/102501733/whatsapp-image-2023-10-12-at-15-41-22-1-500x500.jpeg",
        },

        {
          name: "Aristomol 650",
          salt: "Paracetamol",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkD6K2DGYLc0X7wVO_KUfsqMjFCOWDiUKp9Q&s",
        },
      ],
      mankindpharma: [
        {
          name: "Manforce Condom's' ",
          salt: "Condoms",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMzi-d1cL99U8tww7HST7jZre546jBbPc_w&s",
        },

        {
          name: "Staylong+",
          salt: "Dapoxetine and Sildenafil",
          image:
            "https://www.onebharatpharmacy.com/uploads/product/main/1740674744_9306_0.png",
        },

        {
          name: "Manforce+",
          salt: " Sildenafil",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/10/456884058/NQ/SX/PG/102086051/manforce-100-mg-tab.jpg",
        },

        {
          name: "Amlokind-At",
          salt: " Amlodipine and Atenolol",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/a/m/aml0046.jpg?tr=q-80,f-webp,w-100,dpr-3,c-at_max%20300w",
        },

        {
          name: "AcneStar",
          salt: " Clindamicin & Nicotinamide Gel",
          image:
            "https://rukminim2.flixcart.com/image/850/1000/xif0q/allopathy/m/r/y/-original-imagp8sxfyjh23yw.jpeg?q=90&crop=false",
        },

        {
          name: "Health-Okk",
          salt: " Combination Of Multivitamins",
          image: "https://aajpharmacy.com//uploads/1218.jpg",
        },

        {
          name: "Gas-O-Fast",
          salt: " Gas-O-Fast",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/G/A/GAS0165_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        },

        {
          name: "Prega News",
          salt: " Prega News",
          image:
            "https://cdn01.pharmeasy.in/dam/products_otc/226830/prega-news-pregnancy-test-kit-1-1669655006.jpg",
        },

        {
          name: "Unwanted 72",
          salt: " Levonorgestrel",
          image:
            "https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1669655391.jpg",
        },

        {
          name: "Nerokind ",
          salt: "Micobalmin",
          image:
            "https://www.onebharatpharmacy.com/uploads/product/main/1621854537_524_1.jpg",
        },

        {
          name: "Nerokind inj",
          salt: "Micobalmin",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/n/u/nur0006.jpg",
        },
      ],
    },

    generic: {
      intas: [
        {
          name: "MicoFol-Plus nf",
          salt: "MultiVitamins",
          image:
            "https://m.media-amazon.com/images/I/81ZZro3TuGL._UF1000,1000_QL80_.jpg",
        },

        {
          name: "Azitas",
          salt: "Azithromycin",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2021/6/AZ/AA/SG/21850807/azintas500.png",
        },

        {
          name: "Pantium DSR",
          salt: "Pantoprazole",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/1/374581440/EX/AM/FB/184797409/90168-1-1000.webp",
        },

        {
          name: "Calcitas D3",
          salt: "Calcium Carbonate + Vitamin D3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJO59nyhnNrkd6jsh-xzHA_-gFkRNIUjJjQ&s",
        },

        {
          name: "Intacoxia 90mg",
          salt: "Etoricoxib",
          image:
            "https://images.apollo247.in/pub/media/catalog/product/i/n/int0072_3_1.jpg",
        },

        {
          name: "Intacoxia 120mg",
          salt: "Etoricoxib",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeYywDjXizREPyEW55xbfCJ1bPKFBGQbteA&s",
        },

        {
          name: "Intacoxia MR",
          salt: "Etoricoxib & Thiocolchicoside",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeYywDjXizREPyEW55xbfCJ1bPKFBGQbteA&s",
        },

        {
          name: "Intacoxia MR",
          salt: "Montelukast and Levocetirizine",
          image:
            "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-025055/montas-l-tablet-10_montas-l-tablet-10--TM-TACR1-025055_3.png?width=320",
        },
      ],
      lupin: [
        {
          name: "Lupipara 650 Mg",
          salt: "Paracetamol",
          image: lupipra,
        },
        {
          name: "Lupipara 500 Mg",
          salt: "Paracetamol",
          image: lupipara500,
        },
        {
          name: "Lupicef-O",
          salt: "Cefixime ",
          image: Lupicef,
        },
        {
          name: "Lupicera-D",
          salt: " Diclofanak Sodium and sarratiopiptidase",
          image: Lupicera,
        },
        {
          name: " Lupipara inj 2ml",
          salt: "Paracetamol",
          image: Lupipara,
        },
        {
          name: "Lupisulide-P",
          salt: "Nimusulide and Paracetamol",
          image: Lupisulide,
        },
        {
          name: "Azilup 500",
          salt: "Azithromycin",
          image: Azilup,
        },
        {
          name: "Azilup 250",
          salt: "Azithromycin",
          image: Azilup250,
        },
        {
          name: "One-Clav",
          salt: " Amoxycillin and Clavulanic Acid",
          image: OneClav,
        },
        {
          name: "One-Clav 625",
          salt: " Amoxycillin and Clavulanic Acid",
          image: OneClav625,
        },
      ],

      leffords: [
        {
          name: "evoxil cv 625",
          salt: "Amoxycillin and Clavulanic",
          image: evoxil
            
        },
        {
          name: "Relikast Fxa",
          salt: "Acebrophylline Montelukast, and Fexofenadine hydrochloride",
          image: relicastfxa
        },
        {
          name: "ReliKast lc",
          salt: "Montelukast Sodium 10 mg & Levocetirizine Dihydrochloride 5 mg ",
          image: Reclastlc
        },
        {
          name: "Relikast Fxa",
          salt: "RELIKAST-LX",
          image: RelikastFxa,
        },
        {
          name: "Itromed200",
          salt: "Itraconazole 200mg",
          image: Itromed200
        },
        {
          name: "Itromed200",
          salt: " Itraconazole 100mg",
          image: Itromed100
        },
        {
          name: "Itromed Shop",
          salt: "Itraconazole",
          image: ItromedShop,
        },
        {
          name: "Lupiford",
          salt: "Lulicanazole 30gm",
          image: Lupiford30,
        },
        {
          name: "Lupiford lotion",
          salt: "Lulicanazole 30ml",
          image: Lupifordlotion30,
        },
        {
          name: "Lupiford",
          salt: "Lulicanazole 10gm",
          image: Lupiford10,
        },
      ],
      glenmark: [
        {
          name: "Telma",
          salt: "Telmisartan",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069884/telma_40mg_tablet_10_s_0.jpg",
        },
        {
          name: "Rosuvas",
          salt: "Rosuvastatin",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069876/shelcal_500mg_tablet_15_s_0.jpg",
        },
        {
          name: "Candi",
          salt: "Clotrimazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069808/candid_v3_vaginal_tablet_3_s_0.jpg",
        },
        {
          name: "Ascoril",
          salt: "Guaifenesin + Terbutaline",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069786/ascoril_d_plus_syrup_100ml_0.jpg",
        },
        {
          name: "Forcan",
          salt: "Fluconazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069844/flucanz_150mg_tablet_1_s_0.jpg",
        },
        {
          name: "Telmikind",
          salt: "Telmisartan",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069884/telma_40mg_tablet_10_s_0.jpg",
        },
      ],
      alkem: [
        {
          name: "Taxim-O",
          salt: "Cefixime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg",
        },
        {
          name: "Chempro",
          salt: "Pantoprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg",
        },
        {
          name: "Cefolac",
          salt: "Cefuroxime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg",
        },
        {
          name: "Onexid",
          salt: "Omeprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/10432/omez_20mg_capsule_15_s_0.jpg",
        },
        {
          name: "Alkem-Amlod",
          salt: "Amlodipine",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/10455/stamlo_5mg_tablet_10_s_0.jpg",
        },
      ],
      laborate: [
        {
          name: "Labiz",
          salt: "Cefixime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg",
        },
        {
          name: "Labcef",
          salt: "Cefuroxime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg",
        },
        {
          name: "Labclav",
          salt: "Amoxicillin + Clavulanate",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg",
        },
        {
          name: "Labpan",
          salt: "Pantoprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg",
        },
        {
          name: "Labaz",
          salt: "Azithromycin",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg",
        },
      ],
      galfa: [
        {
          name: "Galfix",
          salt: "Cefixime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg",
        },
        {
          name: "Galfcef",
          salt: "Cefuroxime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg",
        },
        {
          name: "Galfclav",
          salt: "Amoxicillin + Clavulanate",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg",
        },
        {
          name: "Galfpan",
          salt: "Pantoprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg",
        },
        {
          name: "Galfaz",
          salt: "Azithromycin",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg",
        },
      ],
      zanlab: [
        {
          name: "Zanfix",
          salt: "Cefixime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg",
        },
        {
          name: "Zancef",
          salt: "Cefuroxime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg",
        },
        {
          name: "Zanclav",
          salt: "Amoxicillin + Clavulanate",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg",
        },
        {
          name: "Zanpan",
          salt: "Pantoprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg",
        },
        {
          name: "Zanaz",
          salt: "Azithromycin",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg",
        },
      ],
      biochem: [
        {
          name: "Biofix",
          salt: "Cefixime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069899/zifi_200mg_tablet_10_s_0.jpg",
        },
        {
          name: "Bioccef",
          salt: "Cefuroxime",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069806/cefuroxime_500mg_tablet_10_s_0.jpg",
        },
        {
          name: "Bioclav",
          salt: "Amoxicillin + Clavulanate",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069816/clavam_625mg_tablet_10_s_0.jpg",
        },
        {
          name: "Biopan",
          salt: "Pantoprazole",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069869/pantop_40mg_tablet_15_s_0.jpg",
        },
        {
          name: "Bioaz",
          salt: "Azithromycin",
          image:
            "https://www.netmeds.com/images/product-v1/600x600/1069798/azithral_500mg_tablet_5_s_0.jpg",
        },
      ],
    },
  };

  console.log("Category:", category, "Company:", company);
  console.log("All Products:", allProducts);
  console.log(
    "Data Access:",
    allProducts[category],
    "Company Key:",
    company?.toLowerCase(),
    "Result:",
    allProducts[category]?.[company?.toLowerCase()]
  );

  // Access data with category and company
  const data = allProducts[category]?.[company?.toLowerCase()] || [];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1;
      return 0;
    });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        <Button
          variant="outline-secondary"
          onClick={() => navigate(-1)}
          className="btn-outline-secondary"
        >
          ← Back
        </Button>
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
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td>
                    <span className="text-muted small">
                      Price not available
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
                <td colSpan="6" className="text-center text-muted">
                  No products found.
                </td>
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
              variant={
                currentPage === index + 1 ? "success" : "outline-success"
              }
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
          <p>
            <strong>Buy now is currently unavailable.</strong>
          </p>
          <p>Please contact us or WhatsApp to place your order.</p>
          <p>
            📞 <strong>+91-XXXXXXXXXX</strong>
          </p>
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
