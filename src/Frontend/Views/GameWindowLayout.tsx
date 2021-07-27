import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BorderlessPane, EmSpacer } from '../Components/CoreUI';
import {
  CanvasContainer,
  CanvasWrapper,
  MainWindow,
  UpperLeft,
  WindowWrapper,
} from '../Components/GameWindowComponents';
import ControllableCanvas from '../Game/ControllableCanvas';
import { CoordsPane } from '../Panes/CoordsPane';
import { DiagnosticsPane } from '../Panes/DiagnosticsPane';
import { ExplorePane } from '../Panes/ExplorePane';
import { HelpPane } from '../Panes/HelpPane';
import { HoverPlanetPane } from '../Panes/HoverPlanetPane';
import OnboardingPane from '../Panes/OnboardingPane';
import { PlanetContextPane } from '../Panes/PlanetContextPane';
import { PlanetDexPane } from '../Panes/PlanetDexPane';
import { PlayerArtifactsPane } from '../Panes/PlayerArtifactsPane';
import { PluginLibraryPane } from '../Panes/PluginLibraryPane';
import { PrivatePane } from '../Panes/PrivatePane';
import { SettingsPane } from '../Panes/SettingsPane';
import { Tooltip } from '../Panes/Tooltip';
import { TutorialPane } from '../Panes/TutorialPane';
import { TwitterVerifyPane } from '../Panes/TwitterVerifyPane';
import { ZoomPane } from '../Panes/ZoomPane';
import { useSelectedPlanet, useUIManager } from '../Utils/AppHooks';
import { Setting, useBooleanSetting } from '../Utils/SettingsHooks';
import {
  TOGGLE_ARTIFACTS_DEX_PANE,
  TOGGLE_DIAGNOSTICS_PANE,
  TOGGLE_PLANET_DEX_PANE,
  useSubscribeToShortcut,
} from '../Utils/ShortcutConstants';
import {
  ModalHelpIcon,
  ModalPlanetDexIcon,
  ModalPluginIcon,
  ModalSettingsIcon,
  ModalYourArtifactsIcon,
} from './ModalIcon';
import { NotificationsPane } from './Notifications';
import { TopBar } from './TopBar';

export function GameWindowLayout({
  terminalVisible,
  setTerminalVisible,
}: {
  terminalVisible: boolean;
  setTerminalVisible: (visible: boolean) => void;
}) {
  const helpHook = useState<boolean>(false);
  const planetdexHook = useState<boolean>(false);
  const yourArtifactsHook = useState<boolean>(false);
  const twitterVerifyHook = useState<boolean>(false);
  const settingsHook = useState<boolean>(false);
  const privateHook = useState<boolean>(false);
  const pluginsHook = useState<boolean>(false);
  const modalsContainerRef = useRef<HTMLDivElement | null>(null);
  const uiManager = useUIManager();
  const newPlayerHook = useBooleanSetting(uiManager, Setting.NewPlayer);
  const tutorialHook = useBooleanSetting(uiManager, Setting.TutorialOpen);

  const selected = useSelectedPlanet(uiManager).value;
  const selectedPlanetHook = useState<boolean>(!!selected);
  const diagnosticsHook = useState<boolean>(false);
  const [, setSelectedPlanetVisible] = selectedPlanetHook;

  const [userTerminalVisibleSetting, setTerminalVisibleSetting] = useBooleanSetting(
    uiManager,
    Setting.TerminalVisible
  );

  const account = uiManager.getAccount();
  useEffect(() => {
    if (uiManager.getAccount()) {
      setTerminalVisible(uiManager.getBooleanSetting(Setting.TerminalVisible));
    }
  }, [account, uiManager, setTerminalVisible]);

  useEffect(() => {
    if (userTerminalVisibleSetting !== terminalVisible) {
      setTerminalVisibleSetting(terminalVisible);
    }
  }, [userTerminalVisibleSetting, setTerminalVisibleSetting, terminalVisible]);

  useEffect(() => setSelectedPlanetVisible(!!selected), [selected, setSelectedPlanetVisible]);

  useSubscribeToShortcut(
    TOGGLE_PLANET_DEX_PANE,
    useCallback(() => {
      planetdexHook[1](true);
    }, [planetdexHook])
  );

  useSubscribeToShortcut(
    TOGGLE_ARTIFACTS_DEX_PANE,
    useCallback(() => {
      yourArtifactsHook[1](true);
    }, [yourArtifactsHook])
  );

  useSubscribeToShortcut(
    TOGGLE_DIAGNOSTICS_PANE,
    useCallback(() => {
      diagnosticsHook[1](true);
    }, [diagnosticsHook])
  );

  return (
    <WindowWrapper>
      <TopBarPaneContainer>
        <BorderlessPane>
          <TopBar twitterVerifyHook={twitterVerifyHook} />
        </BorderlessPane>
      </TopBarPaneContainer>

      <Tooltip />

      {/* all modals rendered into here */}
      <div ref={modalsContainerRef}>
        <HelpPane hook={helpHook} />
        <PlanetDexPane hook={planetdexHook} />
        <TwitterVerifyPane hook={twitterVerifyHook} />
        <SettingsPane
          ethConnection={uiManager.getEthConnection()}
          hook={settingsHook}
          privateHook={privateHook}
        />
        <PrivatePane hook={privateHook} />
        <PlayerArtifactsPane hook={yourArtifactsHook} />
        <PlanetContextPane hook={selectedPlanetHook} />
        <DiagnosticsPane hook={diagnosticsHook} />
        {modalsContainerRef.current && (
          <PluginLibraryPane
            modalsContainer={modalsContainerRef.current}
            gameUIManager={uiManager}
            hook={pluginsHook}
          />
        )}
      </div>

      <OnboardingPane newPlayerHook={newPlayerHook} />

      <MainWindow>
        <CanvasContainer>
          <UpperLeft>
            <ZoomPane />
          </UpperLeft>
          <WindowTogglesPaneContainer>
            <BorderlessPane>
              <ModalSettingsIcon
                hook={settingsHook}
                text={'Settings'}
                style={{
                  width: '180px',
                  height: '2em',
                  padding: '4px 8px',
                }}
              />
              <EmSpacer height={0.5} />
              <ModalHelpIcon
                hook={helpHook}
                style={{
                  width: '180px',
                  height: '2em',
                  padding: '4px 8px',
                }}
                text={'Help'}
              />
              <EmSpacer height={0.5} />

              <ModalPluginIcon
                hook={pluginsHook}
                style={{
                  width: '180px',
                  height: '2em',
                  padding: '4px 8px',
                }}
                text={'Plugins'}
              />
              <EmSpacer height={0.5} />
              <ModalYourArtifactsIcon
                hook={yourArtifactsHook}
                style={{
                  width: '180px',
                  height: '2em',
                  padding: '4px 8px',
                }}
                text={'Your Artifacts'}
              />
              <EmSpacer height={0.5} />
              <ModalPlanetDexIcon
                hook={planetdexHook}
                style={{
                  width: '180px',
                  height: '2em',
                  padding: '4px 8px',
                }}
                text={'Your Planets'}
              />
            </BorderlessPane>
          </WindowTogglesPaneContainer>
          <CanvasWrapper>
            <ControllableCanvas />
          </CanvasWrapper>

          <NotificationsPane />
          <CoordsPane />
          <ExplorePane />

          <HoverPlanetPane />

          <TutorialPane tutorialHook={tutorialHook} />
        </CanvasContainer>
      </MainWindow>
    </WindowWrapper>
  );
}

const WindowTogglesPaneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const TopBarPaneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;
