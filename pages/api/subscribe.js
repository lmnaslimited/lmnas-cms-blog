const myHeaders = new Headers({
    "Authorization": `${process.env.AUTH_BASE_64}`,
    "Content-Type": "application/json",
    "Cookie": "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image="
});
export default async function handler(req, res) {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            
            // Check if the email is already subscribed
            const emailCheckResponse = await fetch(
                `${process.env.URL}/api/resource/Email Group Member?fields=["email"]&filters={"email":"${email}","email_group":"Website"}`,
                {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                }
            );
 
            if (!emailCheckResponse.ok) {
                const errorText = await emailCheckResponse.text();
                return res.status(emailCheckResponse.status).json({ error: errorText });
            }
 
            const emailCheckData = await emailCheckResponse.json();
 
            if (emailCheckData.data.length > 0) {
                return res.status(200).json({ message: 'You’re already subscribed!' });
            }
 
            // Subscribe the email if it's not already subscribed
            const subscribeResponse = await fetch(
                `${process.env.URL}/api/method/frappe.email.doctype.newsletter.newsletter.subscribe`,
                {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify({ email }),
                    redirect: 'follow',
                }
            );
 
            if (!subscribeResponse.ok) {
                const errorText = await subscribeResponse.text();
                return res.status(subscribeResponse.status).json({ error: errorText });
            }
 
            const result = await subscribeResponse.json();
            return res.status(200).json({ message: 'Please view your inbox!', data: result });
 
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred, please try again later.' });
        }
 
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}