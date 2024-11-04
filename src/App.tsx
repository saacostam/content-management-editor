import { Paragraph } from "./modules/components.core";
import { Editor } from "./modules/editor";
import { ContainerLayout, AppShell } from "./modules/layouts.core";

function App() {
  return (
    <>
      <AppShell>
        <ContainerLayout>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget ultricies ultricies, nisl nunc ultricies nisl,
            nisl euismod nisl nunc id nisl. Donec euismod, nisl eget ultricies.
          </Paragraph>
          <Editor />
        </ContainerLayout>
      </AppShell>
    </>
  );
}

export default App;
