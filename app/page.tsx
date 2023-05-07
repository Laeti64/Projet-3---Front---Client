export default function Page() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        Please provide an ID for your Homepage in .env to get an automatic
        redirection
      </div>
    </div>
  );
}
