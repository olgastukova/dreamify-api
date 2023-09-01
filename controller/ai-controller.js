// const postAI = ( async (req, res) => {
//     const prompt = req.body.prompt;
  
//     try {
//       if (prompt == null) {
//         throw new Error("No prompt was provided");
//       }
  
//       return res.status(200).json({
//         success: true,
//         message: prompt,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   });

//   module.exports = {
//     postAI
//   }