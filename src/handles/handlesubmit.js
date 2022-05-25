import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase-setup/firebase"
 
const handleSubmit = (testdata) => {
    console.log('[firebase]', firestore)
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log('[err]', err)
    }
}
 
export default handleSubmit