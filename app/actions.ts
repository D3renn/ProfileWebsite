'use server';

// This code ONLY runs on the server
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Simulate database save
  console.log('Server Action - Saving to database:', { name, email, message });
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // TODO: Here you would actually save to database
  // await db.contacts.create({ name, email, message });
  
  return { success: true, message: 'Message received!' };
}

export async function getProjects() {
  // Simulate fetching from database
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    { id: 1, title: 'E-commerce Platform', tech: ['React', 'Node.js'] },
    { id: 2, title: 'Portfolio Website', tech: ['Next.js', 'TypeScript'] },
    { id: 3, title: 'Mobile App', tech: ['React Native', 'Firebase'] },
  ];
}
