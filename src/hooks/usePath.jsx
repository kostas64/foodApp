import {useMemo} from 'react';
import {sizes} from '../constants';
import {curveBasis, line} from 'd3-shape';
import {parse} from 'react-native-redash';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NUM_TABS = 3;
const SCALE = 0.7;

const generateTabShapePath = (position, adjustedHeight) => {
  const adjustedWidth = sizes.WIDTH / NUM_TABS;
  const tabX = adjustedWidth * position;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0],
    [tabX - 110 * SCALE, 0],
    [tabX - (50 - 5) * SCALE, SCALE],
    [tabX - (50 - 5) * SCALE, (adjustedHeight - 8) * SCALE],
    [tabX + (50 - 5) * SCALE, (adjustedHeight - 8) * SCALE],
    [tabX + (50 - 5) * SCALE, SCALE],
    [tabX + 110 * SCALE, 0],
    [tabX + 100 * SCALE, 0],
  ]);

  return `${tab}`;
};

const usePath = () => {
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = insets.bottom > 0 ? 64 : 68;
  const tHeight = TAB_BAR_HEIGHT + insets.bottom;
  const adjustedHeight = tHeight - insets.bottom;

  const containerPath = useMemo(() => {
    return `M0,0L${sizes.WIDTH},0L${sizes.WIDTH},0L${sizes.WIDTH},${tHeight}L0,${tHeight}L0,0`;
  }, [tHeight]);

  const curvedPaths = useMemo(() => {
    return Array.from({length: NUM_TABS}, (_, index) => {
      const tabShapePath = generateTabShapePath(index + 0.5, adjustedHeight);
      return parse(`${tabShapePath}`);
    });
  }, [adjustedHeight]);

  return {containerPath, curvedPaths, tHeight};
};

export default usePath;
